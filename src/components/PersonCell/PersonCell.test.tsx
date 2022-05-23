import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from '../../styles/theme';
import PersonCell from './PersonCell';

describe('PersonCell', () => {
	it('Should render title and description', () => {
		const title = 'Some title';
		const description = 'Some description';

		render(
			<ThemeProvider theme={DEFAULT_THEME}>
				<PersonCell title={title} description={description} />
			</ThemeProvider>
		);

		screen.getByText(title);
		screen.getByText(description);
	});
});
