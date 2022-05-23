import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from '../../styles/theme';
import NoticeCell from './NoticeCell';

describe('NoticeCell', () => {
	it('Should render children', () => {
		const childrenText = 'Some value';

		render(
			<ThemeProvider theme={DEFAULT_THEME}>
				<NoticeCell>{childrenText}</NoticeCell>
			</ThemeProvider>
		);

		screen.getByText(childrenText);
	});
});
