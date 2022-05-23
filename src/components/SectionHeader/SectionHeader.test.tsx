import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from '../../styles/theme';
import SectionHeader from './SectionHeader';

describe('SectionHeader', () => {
	it('Should render children', () => {
		const children = 'Some title';

		render(
			<ThemeProvider theme={DEFAULT_THEME}>
				<SectionHeader>{children}</SectionHeader>
			</ThemeProvider>
		);

		screen.getByText(children);
	});
});
