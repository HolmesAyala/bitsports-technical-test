/**
 * Extracts the last url part as a number
 *
 * @example
 * ```
 * getResourceIdFromUrl('https://api/resource/55')
 * // Output: 55
 * ```
 *
 * @example
 * ```
 * getResourceIdFromUrl('bad_url')
 * // Output: -1
 * ```
 * @example
 * ```
 * getResourceIdFromUrl('https://api/resource/not_a_number')
 * // Output: -1
 * ```
 */
export default function getResourceIdFromUrl(url: string): number {
	try {
		const urlObject = new URL(url);

		const resourceId: string | undefined = urlObject.pathname.split('/').pop();

		if (Number.isInteger(Number(resourceId))) return Number(resourceId);
	} catch (error) {}

	return -1;
}
