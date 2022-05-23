export type Config = {
	api: {
		baseUrl: string;
	};
};

export const config: Config = {
	api: {
		baseUrl: process.env.REACT_APP_API_BASE_URL ?? 'WITHOUT_BASE_URL',
	},
};
