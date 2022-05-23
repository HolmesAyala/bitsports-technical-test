import getCharacters, { ResponseBody } from './getCharacters';

describe('getCharacters', () => {
	beforeEach(() => {
		fetchMock.resetMocks();
	});

	it('Return is equals to response body', async () => {
		const responseBody: ResponseBody = {
			info: {
				next: null,
			},
			results: [],
		};

		fetchMock.mockResponseOnce(JSON.stringify(responseBody));

		const response = await getCharacters();

		expect(response).toEqual(responseBody);
	});

	it('Throws error on fail request', async () => {
		fetchMock.mockReject(() => Promise.reject('Fail'));

		let withError = false;

		try {
			await getCharacters();
		} catch (error) {
			withError = true;
		}

		expect(withError).toBe(true);
	});
});
