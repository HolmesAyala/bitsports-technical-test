export default function getResourceIdFromUrl(url: string): number {
	try {
		const urlObject = new URL(url);

		const resourceId: string | undefined = urlObject.pathname.split('/').pop();

		if (Number.isInteger(Number(resourceId))) return Number(resourceId);
	} catch (error) {}

	return -1;
}
