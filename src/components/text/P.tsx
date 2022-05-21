import styled from 'styled-components';
import { TextColors } from '../../styles/theme';

type ParagraphProps = { color?: keyof Omit<TextColors, 'emphasis'> };

const P = styled('p')<ParagraphProps>`
	font-size: 0.875rem;
	font-weight: 400;
	font-style: normal;
	line-height: 1.0625rem;
	letter-spacing: 0.0125rem;
	margin: 0;
	color: ${({ color, theme }) => {
		if (color === undefined) return theme.colors.text.dark;

		return theme.colors.text[color];
	}};
`;

export default P;
