import { css } from 'styled-components';

export const BASE_FONT_SIZE: string = '1rem';

export const MAIN_FONT: string = `'sf-pro-display'`;

export const FONT_FAMILY: string = `${MAIN_FONT}, sans-serif`;

export const fontsDeclaration = css`
	@font-face {
		font-family: ${MAIN_FONT};
		src: url('../assets/fonts/sf-pro-display-regular.ttf') format('ttf');
		font-weight: 400;
		font-style: normal;
	}

	@font-face {
		font-family: ${MAIN_FONT};
		src: url('../assets/fonts/sf-pro-display-bold.ttf') format('ttf');
		font-weight: 700;
		font-style: normal;
	}
`;
