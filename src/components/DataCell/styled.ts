import styled from 'styled-components';
import { H2 } from '../text';

export const DataCell = styled('div')`
	padding: ${({ theme }) => theme.spacing(4)}px;
	display: flex;
	justify-content: space-between;
	gap: ${({ theme }) => theme.spacing(4)}px;
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

export const PropertyText = styled(H2)`
	flex: 1 1 0;
	text-align: left;
`;

export const ValueText = styled(H2)`
	flex: 1 1 0;
	text-align: right;
`;
