import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from './styles/theme';
import { GlobalStyle } from './styles/global';
import Home from './pages/Home';

function App() {
	return (
		<ThemeProvider theme={DEFAULT_THEME}>
			<GlobalStyle />

			<Home />
		</ThemeProvider>
	);
}

export default App;
