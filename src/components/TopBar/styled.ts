import styled, { css } from 'styled-components';
import { H2 } from '../../components/text';

export const TopBar = styled('header')<{ withLeftAction: boolean }>(
	({ theme, withLeftAction }) => css`
		display: grid;
		justify-content: center;
		align-items: center;
		background-color: ${theme.colors.primary.main};
		padding: ${theme.spacing(4)}px ${theme.spacing(5) + 1}px;

		${withLeftAction &&
		css`
			grid-template-columns: 30px minmax(0, 1fr) 30px;
			justify-content: center;
			column-gap: ${theme.spacing(4)}px;
			padding: ${theme.spacing(3) + 3}px ${theme.spacing(4)}px;
		`}
	`
);

export const BackButton = styled('button')`
	width: 30px;
	height: 30px;
	background-color: transparent;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;

	&:hover {
		cursor: pointer;
	}
`;

export const Title = styled(H2)`
	color: white;
	justify-self: center;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	max-width: 100%;
`;
