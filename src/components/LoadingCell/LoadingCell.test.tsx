import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from '../../styles/theme';
import LoadingCell from './LoadingCell';

describe('LoadingCell', () => {
	it('Should render', () => {
		render(
			<ThemeProvider theme={DEFAULT_THEME}>
				<LoadingCell data-testid='test-id' />
			</ThemeProvider>
		);

		screen.getByTestId('test-id');
	});
});
