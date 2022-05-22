import styled from 'styled-components';
import CharacterListComponent from './components/CharacterList';

export const Home = styled('header')`
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow: hidden;
`;

export const CharacterList = styled(CharacterListComponent)`
	overflow: auto;
`;
