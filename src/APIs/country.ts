import { data as DUMMY_DATA } from '@components/country-list/data';

export default {
	getCountryList: async () => {
		const error = null;
		const data = await new Promise((res) => {
			setTimeout(() => {
				res(DUMMY_DATA);
			}, 1000);
		});

		return { data, error };
	},
};
