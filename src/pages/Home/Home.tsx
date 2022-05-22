import { useState, useCallback } from 'react';

import * as styled from './styled';

import TopBar from '../../components/TopBar';

import { Character } from '../../api/getCharacters';

const Home = () => {
	const [characterSelected, setCharacterSelected] = useState<Character | null>(null);

	const onBackFromTopBar = useCallback(() => {
		setCharacterSelected(null);
	}, []);

	const onSelectItemFromCharacterList = useCallback((character: Character) => {
		setCharacterSelected(character);
	}, []);

	const characterList: JSX.Element = (
		<styled.CharacterList onSelectItem={onSelectItemFromCharacterList} />
	);

	return (
		<styled.Home>
			<TopBar
				backButton={Boolean(characterSelected)}
				title={characterSelected ? characterSelected.name : 'Characters of Rick and Morty'}
				onBack={onBackFromTopBar}
			/>

			{!characterSelected && characterList}

			{characterSelected && <styled.CharacterDetail character={characterSelected} />}
		</styled.Home>
	);
};

export default Home;
