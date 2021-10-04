import axios, { AxiosRequestConfig } from 'axios';

export const axiosHttpRequest = async (
	axiosConfig: AxiosRequestConfig,
): Promise<{
	data: any;
	error: any;
}> => {
	let error = null,
		data = null;

	try {
		data = await axios.create(axiosConfig);
	} catch (e) {
		error = e;
	}

	return { data, error };
};
