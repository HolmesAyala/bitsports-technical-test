import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from './styles/theme';
import { GlobalStyle } from './styles/global';

function App() {
	return (
		<ThemeProvider theme={DEFAULT_THEME}>
			<GlobalStyle />
		</ThemeProvider>
	);
}

export default App;
