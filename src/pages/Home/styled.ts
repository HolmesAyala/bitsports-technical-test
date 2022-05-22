import styled from 'styled-components';
import CharacterListBase from './components/CharacterList';
import CharacterDetailBase from './components/CharacterDetail';

export const Home = styled('header')`
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow: hidden;
`;

export const CharacterList = styled(CharacterListBase)`
	overflow: auto;
`;

export const CharacterDetail = styled(CharacterDetailBase)`
	overflow: auto;
`;
