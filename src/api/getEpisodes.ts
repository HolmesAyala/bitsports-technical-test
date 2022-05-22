export type Episode = {
	id: number;
	name: string;
};

export type ResponseBody = Episode[];

export default async function getEpisodes(ids: number[]): Promise<ResponseBody> {
	const response = await fetch(`https://rickandmortyapi.com/api/episode/${JSON.stringify(ids)}`);

	const responseBody: ResponseBody = await response.json();

	return responseBody;
}
