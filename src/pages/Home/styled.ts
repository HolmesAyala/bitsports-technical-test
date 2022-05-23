import styled, { css } from 'styled-components';
import CharacterListBase from './components/CharacterList';
import CharacterDetailBase from './components/CharacterDetail';
import TopBarBase from '../../components/TopBar';

export const MIN_DESKTOP_WIDTH: string = '890px';

export const CharacterList = styled(CharacterListBase)<{ hidden: boolean }>(
	({ hidden }) => css`
		overflow: auto;

		${hidden &&
		css`
			overflow: hidden;
			height: 0;
			visibility: hidden;
		`}
	`
);

export const CharacterDetail = styled(CharacterDetailBase)`
	max-width: 890px;
	margin: 0 auto;
`;

export const CharacterDetailContainer = styled('div')`
	overflow: auto;
`;

export const ContentContainer = styled('div')`
	flex-grow: 1;
	overflow: hidden;
	display: grid;
`;

export const ContentSeparator = styled('div')`
	align-self: stretch;
	width: 1px;
	background-color: #d9d9d9;
`;

export const TopBar = styled(TopBarBase)``;

export const Home = styled('header')`
	height: 100%;
	display: flex;
	flex-direction: column;

	@media only screen and (min-width: ${MIN_DESKTOP_WIDTH}) {
		${TopBar} {
			box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
			text-align: left;
		}

		${ContentContainer} {
			grid-template-columns: 350px 1px minmax(0, 1fr);
		}

		${CharacterList} {
			box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.15);
		}
	}
`;
