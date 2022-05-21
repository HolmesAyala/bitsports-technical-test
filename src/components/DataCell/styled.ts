import styled from 'styled-components';
import { H2 } from '../text';

export const DataCell = styled('div')`
	padding: ${({ theme }) => theme.spacing(4)}px;
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	justify-content: space-between;
	column-gap: ${({ theme }) => theme.spacing(4)}px;
	position: relative;

	&::after {
		content: ' ';
		position: absolute;
		bottom: 0;
		left: ${({ theme }) => theme.spacing(4)}px;
		right: 0;
		height: 1px;
		background-color: rgba(0, 0, 0, 0.1);
	}
`;

export const ValueText = styled(H2)`
	justify-self: end;
`;
