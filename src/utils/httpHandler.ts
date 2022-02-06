import axios, { AxiosRequestConfig, Method } from 'axios';
import { httpRequestMethod } from '@enums/httpRequestMethod';

type axiosRequestArgsType = {
	url: string;
	config?: AxiosRequestConfig<never>;
	data?: null | undefined;
};

const axiosInstance = axios.create({});

const axiosRequest = {
	GET: ({ url, config }: axiosRequestArgsType) => axiosInstance.get(url, config),
	POST: ({ url, data = null, config }: axiosRequestArgsType) =>
		axiosInstance.post(url, data, config),
	DELETE: ({ url, config }: axiosRequestArgsType) =>
		axiosInstance.delete(url, config),
};

export const axiosHttpRequest = async ({
	url = '',
	body = null,
	config = {},
	method = httpRequestMethod.GET,
}: {
	url: string;
	body?: null | undefined;
	config?: AxiosRequestConfig<never>;
	method: httpRequestMethod;
}): Promise<{
	data: any;
	error: any;
}> => {
	let error, data;

	try {
		data = await axiosRequest[`${method}`]({ url, data: body, config });
	} catch (e) {
		error = e;
	}

	return { data, error };
};
