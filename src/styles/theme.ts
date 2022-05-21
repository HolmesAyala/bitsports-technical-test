import { DefaultTheme as StyledDefaultTheme } from 'styled-components';
import { FONT_FAMILY } from './fonts';

export type TextColors = {
	light: string;
	dark: string;
	emphasis: string;
};

export type DefaultTheme = StyledDefaultTheme;

export type SpaceIndex = 1 | 2 | 3 | 4 | 5;

const SPACING_VALUES: number[] = [0, 2, 4, 8, 16, 32];

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
	spacing(spaceIndex: SpaceIndex) {
		return SPACING_VALUES[spaceIndex];
	},
};
