import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from '../../styles/theme';
import TopBar from './TopBar';

describe('TopBar', () => {
	it('Should render title', () => {
		const title = 'Some title';

		render(
			<ThemeProvider theme={DEFAULT_THEME}>
				<TopBar title={title} />
			</ThemeProvider>
		);

		screen.getByText(title);
	});

	it('Should call onBack when click in BackButton', () => {
		render(
			<ThemeProvider theme={DEFAULT_THEME}>
				<TopBar backButton />
			</ThemeProvider>
		);

		screen.getByRole('button', { name: 'Back' });
	});
});
