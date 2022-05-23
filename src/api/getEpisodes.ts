import { config } from '../config';

export type Episode = {
	id: number;
	name: string;
};

export type ResponseBody = Episode[];

export default async function getEpisodes(ids: number[]): Promise<ResponseBody> {
	const response = await fetch(`${config.api.baseUrl}/episode/${JSON.stringify(ids)}`);

	const responseBody: ResponseBody = await response.json();

	return responseBody;
}
