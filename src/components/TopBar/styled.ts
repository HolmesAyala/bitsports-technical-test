import styled from 'styled-components';
import { H2 } from '../../components/text';

export const TopBar = styled('header')`
	background-color: ${({ theme }) => theme.colors.primary.main};
	padding: ${({ theme }) => theme.spacing(4)}px ${({ theme }) => theme.spacing(5) + 1}px;
`;

export const Title = styled(H2)`
	color: white;
`;
