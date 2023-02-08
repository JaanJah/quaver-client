import HttpClient from '../http/HttpClient';
import { BASE_URL } from '../util/config';
import {
	GetFullUserResponse,
	GetUsersInput,
	GetUsersResponse,
	SearchUserByNameResponse,
} from '../interfaces/Users';

export default class Users {
	private httpClient: HttpClient;

	constructor() {
		this.httpClient = new HttpClient(BASE_URL);
	}

	// https://wiki.quavergame.com/docs/api/users#get-%2Fusers
	public async getUsers(params: GetUsersInput): Promise<GetUsersResponse> {
		return this.httpClient.request<GetUsersResponse, GetUsersInput>(
			'/users',
			params
		);
	}

	// https://wiki.quavergame.com/docs/api/users#get-%2Fusers%2Ffull%2F%3Aid
	public async getUserById(id: number): Promise<GetFullUserResponse> {
		return this.httpClient.request<GetFullUserResponse>(
			`/users/full/${id}`
		);
	}

	// https://wiki.quavergame.com/docs/api/users#get-%2Fusers%2Fsearch%2F%3Aname
	public async searchUserByName(
		name: string
	): Promise<SearchUserByNameResponse> {
		return this.httpClient.request<SearchUserByNameResponse>(
			`/users/search/${name}`
		);
	}
	public async getUserTopScores() {}
	public async getUserRecentScores() {}
	public async getUserFirstPlaces() {}
	public async getUserMapsets() {}
	public async getUserProgression() {}
	public async getUserPlaylists() {}
	public async getUserPlaylistMap(id: number, map_id: number) {}
	public async getUserAchievements(id: number) {}
}
