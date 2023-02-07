import HttpClient from '../http/HttpClient';
import { BASE_URL } from '../util/config';
import { GetUsersInput, GetUsersResponse } from '../interfaces/Users';

export default class Users {
	private httpClient: HttpClient;

	constructor() {
		this.httpClient = new HttpClient(BASE_URL);
	}

	public async getUsers(params: GetUsersInput): Promise<GetUsersResponse> {
		return this.httpClient.request<GetUsersResponse, GetUsersInput>(
			'/users',
			params
		);
	}
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
