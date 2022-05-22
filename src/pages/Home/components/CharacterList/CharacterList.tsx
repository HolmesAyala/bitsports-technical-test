import { useEffect, useCallback, useState, useMemo, HTMLAttributes, UIEvent } from 'react';
import PersonCell from '../../../../components/PersonCell';
import LoadingCell from '../../../../components/LoadingCell';
import NoticeCell from '../../../../components/NoticeCell';
import * as styled from './styled';
import getCharacters, { Character, ResponseBody } from '../../../../api/getCharacters';
import useIsMounted from '../../../../hooks/useIsMounted';

type CharacterListProps = HTMLAttributes<HTMLUListElement>;

const CharacterList = (props: CharacterListProps) => {
	const isMounted = useIsMounted();

	const [nextUrlToLoadCharacters, setNextUrlToLoadCharacters] = useState<string | null>(null);

	const [loadingCharacters, setLoadingCharacters] = useState(false);

	const [errorLoadingCharacters, setErrorLoadingCharacters] = useState(false);

	const [characters, setCharacters] = useState<Character[]>([]);

	const loadMoreCharacters = useCallback(
		async (next?: string) => {
			try {
				setLoadingCharacters(true);
				setErrorLoadingCharacters(false);

				const charactersResponse: ResponseBody = await getCharacters(next);

				if (!isMounted()) return;

				setNextUrlToLoadCharacters(charactersResponse.info.next);
				setCharacters((currentCharacters) => [...currentCharacters, ...charactersResponse.results]);
			} catch (error) {
				if (!isMounted()) return;

				console.error(error);

				setErrorLoadingCharacters(true);
			} finally {
				if (!isMounted()) return;

				setLoadingCharacters(false);
			}
		},
		[isMounted]
	);

	useEffect(() => {
		loadMoreCharacters();
	}, [loadMoreCharacters]);

	const onScrollFromCharacterList = useCallback(
		(event: UIEvent<HTMLUListElement>) => {
			const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;

			if (
				!loadingCharacters &&
				nextUrlToLoadCharacters &&
				scrollTop + clientHeight === scrollHeight
			) {
				loadMoreCharacters(nextUrlToLoadCharacters);
			}
		},
		[loadingCharacters, nextUrlToLoadCharacters, loadMoreCharacters]
	);

	const characterListToRender: JSX.Element[] = useMemo(
		() =>
			characters.map((character) => (
				<PersonCell
					key={character.id}
					title={character.name}
					description={`${character.species} from ${character.origin.name}`}
				/>
			)),
		[characters]
	);

	return (
		<styled.CharacterList onScroll={onScrollFromCharacterList} {...props}>
			{errorLoadingCharacters && <NoticeCell>Failed to Load Data</NoticeCell>}

			{!errorLoadingCharacters && characterListToRender}

			{loadingCharacters && <LoadingCell />}
		</styled.CharacterList>
	);
};

export default CharacterList;
