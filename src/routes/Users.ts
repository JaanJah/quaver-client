import HttpClient from '../http/HttpClient';
import { BASE_URL } from '../util/config';
import { GetUsersInput, GetUsersResponse } from '../interfaces/Users';

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
	public async getUserById(id: number) {}
	public async searchUserByName(name: string) {}
	public async getUserTopScores() {}
	public async getUserRecentScores() {}
	public async getUserFirstPlaces() {}
	public async getUserMapsets() {}
	public async getUserProgression() {}
	public async getUserPlaylists() {}
	public async getUserPlaylistMap(id: number, map_id: number) {}
	public async getUserAchievements(id: number) {}
}
