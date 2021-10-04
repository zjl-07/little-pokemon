import config from '@configs/env';
import { axiosHttpRequest } from '@utils/httpHandler';

export default {
	getTrendingGifs: async () => {
		const { data, error } = await axiosHttpRequest({
			method: 'get',
			url: `${config.API_URL}/gifs/trending?api_key=${config.API_KEY}`,
		});

		return { data, error };
	},

	getTrendingStickers: async () => {
		const { data, error } = await axiosHttpRequest({
			method: 'get',
			url: `${config.API_URL}/stickers/trending?api_key=${config.API_KEY}`,
		});

		return { data, error };
	},
};
