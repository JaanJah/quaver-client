import { fetch } from 'undici';

export default class HttpClient {
	private readonly baseUrl: string;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	public async request<T>(path: string, args: any): Promise<T> {
		const url = this.baseUrl + path;

		const response = await fetch(url);

		return response.json();
	}
}
