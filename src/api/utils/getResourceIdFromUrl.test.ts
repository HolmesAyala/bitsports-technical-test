import getResourceIdFromUrl from './getResourceIdFromUrl';

describe('getResourceIdFromUrl', () => {
	it('Correct url and id', () => {
		expect(getResourceIdFromUrl('https://api/resource/55')).toBe(55);
	});

	it('Incorrect url', () => {
		expect(getResourceIdFromUrl('bad_url')).toBe(-1);
	});

	it('Correct url and incorrect id', () => {
		expect(getResourceIdFromUrl('https://api/resource/not_a_number')).toBe(-1);
	});
});
