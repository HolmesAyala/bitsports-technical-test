import styled from 'styled-components';
import { TextColors } from '../../styles/theme';

type H2Props = { color?: keyof TextColors };

const H2 = styled('h2')<H2Props>`
	font-size: 1.0625rem;
	font-weight: 700;
	font-style: normal;
	line-height: 1.25rem;
	letter-spacing: 0.0125rem;
	margin: 0;
	color: ${({ color, theme }) => {
		if (color === undefined) return theme.colors.text.dark;

		return theme.colors.text[color];
	}};
`;

export default H2;
