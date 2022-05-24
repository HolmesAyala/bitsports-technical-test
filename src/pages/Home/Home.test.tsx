import * as useHooksTs from 'usehooks-ts';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from '../../styles/theme';
import Home, { MAIN_TITLE } from './Home';
import { generateMockCharacters } from './components/CharacterList/CharatcerList.test';
import getCharacters, { Character, ResponseBody } from '../../api/getCharacters';
import getEpisodes from '../../api/getEpisodes';

jest.mock('../../api/getCharacters', () => ({
	...jest.requireActual('../../api/getCharacters'),
	__esModule: true,
	default: jest.fn(),
}));

const getCharactersMock = getCharacters as jest.Mock;

jest.mock('../../api/getEpisodes', () => ({
	...jest.requireActual('../../api/getEpisodes'),
	__esModule: true,
	default: jest.fn(),
}));

const getEpisodesMock = getEpisodes as jest.Mock;

describe('Home', () => {
	const characters: Character[] = generateMockCharacters();

	const responseBody: ResponseBody = {
		info: {
			next: null,
		},
		results: characters,
	};

	getCharactersMock.mockResolvedValue(responseBody);
	getEpisodesMock.mockResolvedValue([]);

	it('Should render the main title', async () => {
		jest.spyOn(useHooksTs, 'useMediaQuery').mockImplementation(() => false);

		render(
			<ThemeProvider theme={DEFAULT_THEME}>
				<Home />
			</ThemeProvider>
		);

		await screen.findByText(MAIN_TITLE);
	});

	it('Mobile: Should render character name in TopBar when the user selects a character', async () => {
		const selectedCharacter: Character = characters[0];

		getCharactersMock.mockResolvedValue(responseBody);

		jest.spyOn(useHooksTs, 'useMediaQuery').mockImplementation(() => false);

		render(
			<ThemeProvider theme={DEFAULT_THEME}>
				<Home />
			</ThemeProvider>
		);

		const characterButton = await screen.findByRole('button', {
			name: `character: ${selectedCharacter.name}`,
		});

		fireEvent.click(characterButton);

		const topBarTitleElement = await screen.findByTestId('top-bar-title');

		expect(topBarTitleElement).toHaveTextContent(selectedCharacter.name);
	});

	it('Desktop: Should render main title with character name in TopBar when the user selects a character', async () => {
		const selectedCharacter: Character = characters[0];

		getCharactersMock.mockResolvedValue(responseBody);

		jest.spyOn(useHooksTs, 'useMediaQuery').mockImplementation(() => true);

		render(
			<ThemeProvider theme={DEFAULT_THEME}>
				<Home />
			</ThemeProvider>
		);

		const characterButton = await screen.findByRole('button', {
			name: `character: ${selectedCharacter.name}`,
		});

		fireEvent.click(characterButton);

		const topBarTitleElement = await screen.findByTestId('top-bar-title');

		expect(topBarTitleElement).toHaveTextContent(`${MAIN_TITLE}: ${selectedCharacter.name}`);
	});
});
