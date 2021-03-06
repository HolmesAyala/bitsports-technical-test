import { config } from '../config';

export type Character = {
	id: number;
	name: string;
	species: string;
	gender: string;
	status: string;
	episode: string[];
	origin: {
		name: string;
	};
};

export type ResponseBody = {
	info: {
		next: string | null;
	};
	results: Character[];
};

export default async function getCharacters(nextUrl?: string): Promise<ResponseBody> {
	const response = await fetch(nextUrl ?? `${config.api.baseUrl}/character`);

	const body: ResponseBody = await response.json();

	return body;
}
