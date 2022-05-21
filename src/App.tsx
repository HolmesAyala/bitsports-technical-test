import styled, { ThemeProvider } from 'styled-components';

import { DEFAULT_THEME } from './styles/theme';

const ThemeTest = styled('div')`
	background-color: ${({ theme }) => theme.colors.text.emphasis};
`;

function App() {
	return (
		<ThemeProvider theme={DEFAULT_THEME}>
			<ThemeTest>Test</ThemeTest>
		</ThemeProvider>
	);
}

export default App;
