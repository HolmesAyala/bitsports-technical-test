import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from '../../../../styles/theme';
import CharacterList, { FAILED_TO_LOAD_CHARACTERS } from './CharacterList';
import getCharacters, { Character, ResponseBody } from '../../../../api/getCharacters';

jest.mock('../../../../api/getCharacters', () => ({
	...jest.requireActual('../../../../api/getCharacters'),
	__esModule: true,
	default: jest.fn(),
}));

const getCharactersMock = getCharacters as jest.Mock;

function generateMockCharacter(id: number): Character {
	return {
		id,
		name: `name ${id}`,
		gender: `gender ${id}`,
		status: `status ${id}`,
		species: `species ${id}`,
		origin: {
			name: `origin name ${id}`,
		},
		episode: [`episode_url_${id}`],
	};
}

export function generateMockCharacters(): Character[] {
	const characters: Character[] = [];

	for (let i = 1; i <= 20; i++) {
		characters.push(generateMockCharacter(i));
	}

	return characters;
}

describe('CharacterList', () => {
	const characters: Character[] = generateMockCharacters();

	beforeEach(() => {
		getCharactersMock.mockReset();
	});

	it('Should render characters', async () => {
		const responseBody: ResponseBody = {
			info: {
				next: null,
			},
			results: characters,
		};

		getCharactersMock.mockResolvedValue(responseBody);

		render(
			<ThemeProvider theme={DEFAULT_THEME}>
				<CharacterList />
			</ThemeProvider>
		);

		await waitFor(() => {
			screen.getByText(characters[0].name);
			screen.getByText(`${characters[0].species} from ${characters[0].origin.name}`);
			screen.getByText(characters[1].name);
			screen.getByText(`${characters[1].species} from ${characters[1].origin.name}`);
		});
	});

	it('Should render fail message when failed to get characters', async () => {
		getCharactersMock.mockRejectedValue(new Error('Failed to get characters'));

		render(
			<ThemeProvider theme={DEFAULT_THEME}>
				<CharacterList />
			</ThemeProvider>
		);

		await waitFor(() => {
			screen.getByText(FAILED_TO_LOAD_CHARACTERS);
		});
	});

	it('Should call to onSelectItem when the user gives click in a character', async () => {
		const responseBody: ResponseBody = {
			info: {
				next: null,
			},
			results: characters,
		};

		const selectedCharacter: Character = characters[0];

		getCharactersMock.mockResolvedValue(responseBody);

		const onSelectItemMock = jest.fn();

		render(
			<ThemeProvider theme={DEFAULT_THEME}>
				<CharacterList onSelectItem={onSelectItemMock} />
			</ThemeProvider>
		);

		const characterButton = await screen.findByRole('button', {
			name: `character: ${selectedCharacter.name}`,
		});

		fireEvent.click(characterButton);

		expect(onSelectItemMock).toBeCalledWith(selectedCharacter);
	});

	it('Should load more data when user scrolls full to bottom', async () => {
		const responseBody1: ResponseBody = {
			info: {
				next: 'next_url',
			},
			results: characters,
		};

		const responseBody2: ResponseBody = {
			info: {
				next: null,
			},
			results: [generateMockCharacter(100)],
		};

		getCharactersMock.mockResolvedValueOnce(responseBody1).mockResolvedValueOnce(responseBody2);

		render(
			<ThemeProvider theme={DEFAULT_THEME}>
				<div style={{ height: '200px', overflow: 'hidden' }}>
					<CharacterList style={{ overflow: 'auto' }} />
				</div>
			</ThemeProvider>
		);

		await screen.findByText(characters[0].name);

		const characterListElement = screen.getByRole('list', { name: 'characters' });

		fireEvent.scroll(characterListElement, {
			currentTarget: {
				scrollTop: characterListElement.scrollHeight - characterListElement.clientHeight,
				clientHeight: characterListElement.clientHeight,
				scrollHeight: characterListElement.scrollHeight,
			},
		});

		await screen.findByText(responseBody2.results[0].name);
	});

	it('When failed to get characters the user should be able to load data again with pull touch', async () => {
		const responseBody: ResponseBody = {
			info: {
				next: null,
			},
			results: characters,
		};

		getCharactersMock
			.mockRejectedValueOnce(new Error('Failed to get characters'))
			.mockResolvedValueOnce(responseBody);

		render(
			<ThemeProvider theme={DEFAULT_THEME}>
				<CharacterList />
			</ThemeProvider>
		);

		await screen.findByText(FAILED_TO_LOAD_CHARACTERS);

		const characterListElement = screen.getByRole('list', { name: 'characters' });

		fireEvent.touchStart(characterListElement, {
			touches: [{ pageY: 0 }],
		});

		fireEvent.touchMove(characterListElement, {
			touches: [{ pageY: 1 }],
		});

		fireEvent.touchEnd(characterListElement, {
			currentTarget: {
				scrollTop: 0,
			},
		});

		await screen.findByText(responseBody.results[0].name);
	});
});
