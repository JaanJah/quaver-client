import { BASE_URL } from '../util/config';
import { fetch } from 'undici';

export default class HttpClient {
	constructor() {}

	public async request<T>(path: string, args: any): Promise<T> {
		const url = BASE_URL + path;

		const response = await fetch(url);

		return response.json();
	}
}
