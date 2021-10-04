import config from '@configs/env';
import { axiosHttpRequest } from '@utils/httpHandler';

export default {
	getTrendingGifs: async () => {
		const { data, error } = await axiosHttpRequest({
			method: 'get',
			url: `${config.baseUrl}/v1/gifs/trending`,
		});

		return { data, error };
	},

	getTrendingStickers: async () => {
		const { data, error } = await axiosHttpRequest({
			method: 'get',
			url: `${config.baseUrl}/v1/stickers/trending`,
		});

		return { data, error };
	},
};
