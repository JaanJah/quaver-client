import { HttpStatus } from './global';

export interface GetUsersInput {
	id: number[];
}

export interface GetUsersResponse {
	status: HttpStatus;
	users: User[];
}

interface User {
	id: number;
	steam_id: string;
	username: string;
	country: string;
	time_registered: string;
	allowed: boolean;
	privileges: number;
	usergroups: number;
	mute_endtime: string;
	latest_activity: string;
	avatar_url: string;
}
