import { useState, useEffect, useMemo } from 'react';
import { useIsMounted } from 'usehooks-ts';

import SectionHeader from '../../../../components/SectionHeader';
import DataCell from '../../../../components/DataCell';
import LoadingCell from '../../../../components/LoadingCell';
import NoticeCell from '../../../../components/NoticeCell';

import { Character } from '../../../../api/getCharacters';
import getEpisodes, { Episode } from '../../../../api/getEpisodes';
import getResourceIdFromUrl from '../../../../api/utils/getResourceIdFromUrl';

type CharacterDetailProps = {
	className?: string;
	character: Character;
};

const CharacterDetail = ({ className, character }: CharacterDetailProps) => {
	const isMounted = useIsMounted();

	const [loadingEpisodes, setLoadingEpisodes] = useState(false);

	const [errorLoadingEpisodes, setErrorLoadingEpisodes] = useState(false);

	const [episodes, setEpisodes] = useState<Episode[]>([]);

	useEffect(() => {
		const loadEpisodes = async (ids: number[]) => {
			try {
				setLoadingEpisodes(true);
				setErrorLoadingEpisodes(false);

				const episodesLoaded: Episode[] = await getEpisodes(ids);

				if (!isMounted()) return;

				setEpisodes(episodesLoaded);
			} catch (error) {
				console.error(error);

				if (!isMounted()) return;

				setErrorLoadingEpisodes(true);
			} finally {
				if (!isMounted()) return;

				setLoadingEpisodes(false);
			}
		};

		loadEpisodes(character.episode.map(getResourceIdFromUrl));
	}, [character, isMounted]);

	const episodesToRender: JSX.Element[] = useMemo(
		() => episodes.map((episode) => <DataCell key={episode.id} property={episode.name} />),
		[episodes]
	);

	return (
		<div className={className}>
			<SectionHeader>General Information</SectionHeader>

			<DataCell property='Status' value={character.status} />

			<DataCell property='Gender' value={character.gender} />

			<DataCell property='Species' value={character.species} />

			<DataCell property='Origin' value={character.origin.name} />

			<SectionHeader>Episodes</SectionHeader>

			{episodesToRender}

			{errorLoadingEpisodes && <NoticeCell>Failed to Load Data</NoticeCell>}

			{loadingEpisodes && <LoadingCell />}
		</div>
	);
};

export default CharacterDetail;
