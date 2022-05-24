import { render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from '../../../../styles/theme';
import CharacterDetail, { ERROR_LOADING_EPISODES } from './CharacterDetail';
import { Character } from '../../../../api/getCharacters';
import getEpisodes, { Episode } from '../../../../api/getEpisodes';

jest.mock('../../../../api/getEpisodes', () => ({
	...jest.requireActual('../../../../api/getEpisodes'),
	__esModule: true,
	default: jest.fn(),
}));

const getEpisodesMock = getEpisodes as jest.Mock;

describe('CharacterDetail', () => {
	const character: Character = {
		id: 1,
		name: '',
		gender: 'test gender',
		status: 'test status',
		species: 'test species',
		origin: {
			name: 'test name origin',
		},
		episode: ['episode_url_1', 'episode_url_2'],
	};

	beforeEach(() => {
		getEpisodesMock.mockReset();
	});

	it('Should render general character information', async () => {
		getEpisodesMock.mockResolvedValue([]);

		render(
			<ThemeProvider theme={DEFAULT_THEME}>
				<CharacterDetail character={character} />
			</ThemeProvider>
		);

		await waitFor(() => {
			expect(screen.queryByText('Loading')).not.toBeInTheDocument();

			screen.getByText(character.status);
			screen.getByText(character.gender);
			screen.getByText(character.species);
			screen.getByText(character.origin.name);
		});
	});

	it('Should render episodes', async () => {
		const mockEpisode1: Episode = { id: 1, name: 'Episode test 1' };
		const mockEpisode2: Episode = { id: 2, name: 'Episode test 2' };

		getEpisodesMock.mockResolvedValue([mockEpisode1, mockEpisode2]);

		render(
			<ThemeProvider theme={DEFAULT_THEME}>
				<CharacterDetail character={character} />
			</ThemeProvider>
		);

		await waitFor(() => {
			screen.getByText(mockEpisode1.name);
			screen.getByText(mockEpisode2.name);
		});
	});

	it('Should render fail message when failed to get episodes', async () => {
		getEpisodesMock.mockRejectedValue(new Error());

		render(
			<ThemeProvider theme={DEFAULT_THEME}>
				<CharacterDetail character={character} />
			</ThemeProvider>
		);

		await waitFor(() => {
			screen.getByText(ERROR_LOADING_EPISODES);
		});
	});
});
