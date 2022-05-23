import getEpisodes, { ResponseBody } from './getEpisodes';

describe('getEpisodes', () => {
	beforeEach(() => {
		fetchMock.resetMocks();
	});

	it('Return is equals to response body', async () => {
		const responseBody: ResponseBody = [{ id: 2, name: 'Some name' }];

		fetchMock.mockResponseOnce(JSON.stringify(responseBody));

		const response = await getEpisodes([2]);

		expect(response).toEqual(responseBody);
	});

	it('Throws error on fail request', async () => {
		fetchMock.mockReject(() => Promise.reject('Fail'));

		let withError = false;

		try {
			await getEpisodes([2]);
		} catch (error) {
			withError = true;
		}

		expect(withError).toBe(true);
	});
});
