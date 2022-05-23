import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from '../../styles/theme';
import DataCell from './DataCell';

describe('DataCell', () => {
	it('Should render property', () => {
		const propertyValue: string = 'test property';

		render(
			<ThemeProvider theme={DEFAULT_THEME}>
				<DataCell property={propertyValue} />
			</ThemeProvider>
		);

		screen.getByText(propertyValue);
	});

	it('Should render value', () => {
		const value: string = 'test value';

		render(
			<ThemeProvider theme={DEFAULT_THEME}>
				<DataCell value={value} />
			</ThemeProvider>
		);

		screen.getByText(value);
	});
});
