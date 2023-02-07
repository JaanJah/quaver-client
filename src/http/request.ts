import { fetch } from 'undici';
import { BASE_URL } from '../util/config';

export default async (path: string, params: any) => {
	const url = BASE_URL + path;

	const response = await fetch(url);

	return response.json();
};
