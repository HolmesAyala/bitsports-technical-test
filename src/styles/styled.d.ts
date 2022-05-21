import 'styled-components';
import { TextColors, SpaceIndex } from './theme';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			primary: {
				main: string;
			};
			text: TextColors;
		};
		fonts: {
			primary: {
				fontFamily: string;
			};
		};
		spacing: (spaceIndex: SpaceIndex) => number;
	}
}
