import styled from 'styled-components';

export const PersonCell = styled('button')`
	padding: ${({ theme }) => theme.spacing(4)}px;
	display: grid;
	grid-template-columns: minmax(0, 1fr) 24px;
	column-gap: ${({ theme }) => theme.spacing(4)}px;
	align-items: center;
	position: relative;
	background-color: white;
	border: none;
	width: 100%;
	text-align: start;

	&:hover {
		cursor: pointer;
	}

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
