import { fetch } from 'undici';

export default class HttpClient {
	private readonly baseUrl: string;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	public async request<T, V = {}>(path: string, params?: V): Promise<T> {
		let url = this.baseUrl + path;

		if (params) {
			url += this.parseParams(params);
		}

		const response = await fetch(url);
		return (await response.json()) as T;
	}

	private parseParams<T>(params: T): string {
		let queryString = '';

		for (const [key, value] of Object.entries(params)) {
			let prefix = '&';
			if (queryString.length === 0) {
				prefix = '?';
			}

			if (Array.isArray(value)) {
				const args = value
					.map((val) => {
						return `${key}=${val}&`;
					})
					.join('')
					.slice(0, -1);
				queryString += `${prefix}${args}`;
			} else {
				queryString += `${prefix}${key}=${value}`;
			}
		}

		return queryString;
	}
}
