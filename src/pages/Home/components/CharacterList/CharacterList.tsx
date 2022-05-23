import {
	useEffect,
	useCallback,
	useState,
	useMemo,
	useRef,
	HTMLAttributes,
	UIEvent,
	MouseEvent,
	TouchEvent,
} from 'react';
import { useIsMounted } from 'usehooks-ts';

import PersonCell from '../../../../components/PersonCell';
import LoadingCell from '../../../../components/LoadingCell';
import NoticeCell from '../../../../components/NoticeCell';
import * as styled from './styled';
import getCharacters, { Character, ResponseBody } from '../../../../api/getCharacters';

type CharacterListProps = HTMLAttributes<HTMLUListElement> & {
	onSelectItem?: (character: Character) => void;
};

const CharacterList = ({ onSelectItem, ...props }: CharacterListProps) => {
	const isMounted = useIsMounted();

	const touchYRef = useRef<{ start: number; end: number }>({ start: 0, end: 0 });

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

	const onClickFromCharacterCell = useCallback(
		(event: MouseEvent<HTMLButtonElement>) => {
			const { characterId } = event.currentTarget.dataset;

			const characterToSelect: Character | undefined = characters.find(
				(character) => character.id === Number(characterId)
			);

			if (characterToSelect && onSelectItem) {
				onSelectItem(characterToSelect);
			}
		},
		[characters, onSelectItem]
	);

	const onScrollFromCharacterList = useCallback(
		(event: UIEvent<HTMLUListElement>) => {
			const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;

			const isFullScroll: boolean = Math.round(scrollTop) + clientHeight === scrollHeight;

			if (!loadingCharacters && nextUrlToLoadCharacters && isFullScroll) {
				loadMoreCharacters(nextUrlToLoadCharacters);
			}
		},
		[loadingCharacters, nextUrlToLoadCharacters, loadMoreCharacters]
	);

	const onTouchStartFromCharacterList = useCallback((event: TouchEvent<HTMLUListElement>) => {
		touchYRef.current.start = event.touches[0].pageY;
	}, []);

	const onTouchMoveFromCharacterList = useCallback((event: TouchEvent<HTMLUListElement>) => {
		touchYRef.current.end = event.touches[0].pageY;
	}, []);

	const onTouchEndFromCharacterList = useCallback(
		(event: TouchEvent<HTMLUListElement>) => {
			const shouldTryToLoadDataAgain: boolean =
				errorLoadingCharacters &&
				!loadingCharacters &&
				event.currentTarget.scrollTop === 0 &&
				touchYRef.current.start < touchYRef.current.end;

			if (shouldTryToLoadDataAgain) {
				loadMoreCharacters(nextUrlToLoadCharacters ?? undefined);
			}
		},
		[errorLoadingCharacters, loadingCharacters, loadMoreCharacters, nextUrlToLoadCharacters]
	);

	const characterListToRender: JSX.Element[] = useMemo(
		() =>
			characters.map((character) => (
				<PersonCell
					data-character-id={character.id}
					key={character.id}
					title={character.name}
					description={`${character.species} from ${character.origin.name}`}
					onClick={onClickFromCharacterCell}
				/>
			)),
		[characters, onClickFromCharacterCell]
	);

	return (
		<styled.CharacterList
			onScroll={onScrollFromCharacterList}
			onTouchStart={onTouchStartFromCharacterList}
			onTouchMove={onTouchMoveFromCharacterList}
			onTouchEnd={onTouchEndFromCharacterList}
			{...props}
		>
			{errorLoadingCharacters && <NoticeCell>Failed to Load Data</NoticeCell>}

			{!errorLoadingCharacters && characterListToRender}

			<LoadingCell style={{ visibility: loadingCharacters ? 'visible' : 'hidden' }} />
		</styled.CharacterList>
	);
};

export default CharacterList;
