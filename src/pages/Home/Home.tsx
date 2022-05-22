import { useState, useCallback, useMemo } from 'react';
import { useMediaQuery } from 'usehooks-ts';

import * as styled from './styled';

import { Character } from '../../api/getCharacters';

const Home = () => {
	const isDesktop = useMediaQuery(`(min-width:${styled.MIN_DESKTOP_WIDTH})`);

	const [characterSelected, setCharacterSelected] = useState<Character | null>(null);

	const topBarTitle: string = useMemo(() => {
		const mainTitle = 'Characters of Rick and Morty';

		if (!characterSelected) return mainTitle;

		if (isDesktop) return `${mainTitle}: ${characterSelected.name}`;

		return characterSelected.name;
	}, [characterSelected, isDesktop]);

	const onBackFromTopBar = useCallback(() => {
		setCharacterSelected(null);
	}, []);

	const onSelectItemFromCharacterList = useCallback((character: Character) => {
		setCharacterSelected(character);
	}, []);

	const characterList: JSX.Element = (
		<styled.CharacterList
			hidden={Boolean(characterSelected && !isDesktop)}
			onSelectItem={onSelectItemFromCharacterList}
		/>
	);

	const characterDetail: JSX.Element | undefined = characterSelected ? (
		<styled.CharacterDetailContainer>
			<styled.CharacterDetail character={characterSelected} />
		</styled.CharacterDetailContainer>
	) : undefined;

	return (
		<styled.Home>
			<styled.TopBar
				backButton={!isDesktop && Boolean(characterSelected)}
				title={topBarTitle}
				onBack={onBackFromTopBar}
			/>

			<styled.ContentContainer>
				{characterList}

				{isDesktop && <styled.ContentSeparator />}

				{characterDetail}
			</styled.ContentContainer>
		</styled.Home>
	);
};

export default Home;
