import { DefaultTheme } from 'styled-components';
import { FONT_FAMILY } from './fonts';

export const DEFAULT_THEME: DefaultTheme = {
	colors: {
		primary: {
			// Ravn Black
			main: '#121212',
		},
		text: {
			light: '#828282',
			dark: '#333333',
			emphasis: '#EC5757',
		},
	},
	fonts: {
		primary: {
			fontFamily: FONT_FAMILY,
		},
	},
};
