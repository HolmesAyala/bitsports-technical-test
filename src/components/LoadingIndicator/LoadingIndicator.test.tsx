import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from '../../styles/theme';
import LoadingIndicator, { DEFAULT_MESSAGE } from './LoadingIndicator';

describe('LoadingIndicator', () => {
	it('Should render default message', () => {
		render(
			<ThemeProvider theme={DEFAULT_THEME}>
				<LoadingIndicator />
			</ThemeProvider>
		);

		screen.getByText(DEFAULT_MESSAGE);
	});

	it('Should render custom message', () => {
		const customMessage = 'Custom message';

		render(
			<ThemeProvider theme={DEFAULT_THEME}>
				<LoadingIndicator>{customMessage}</LoadingIndicator>
			</ThemeProvider>
		);

		screen.getByText(customMessage);
	});
});
