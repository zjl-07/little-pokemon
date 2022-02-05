import config from '@configs/env';
import { axiosHttpRequest } from '@utils/httpHandler';
import { httpRequestMethod } from '@enums/httpRequestMethod';

export default {
	getPokemonList: async ({ page = 1, limit = 20 }) => {
		const { data, error } = await axiosHttpRequest({
			method: httpRequestMethod.GET,
			url: `${config.POKEMON_API_URL}pokemon?offset=${
				(page - 1) * limit
			}&limit=${limit}`,
		});

		return { data, error };
	},
};
