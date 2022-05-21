import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			primary: {
				main: string;
			};
			text: {
				light: string;
				dark: string;
				emphasis: string;
			};
		};
		fonts: {
			primary: {
				fontFamily: string;
			};
		};
	}
}
