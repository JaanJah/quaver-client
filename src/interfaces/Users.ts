import { HttpStatus } from './global';

export interface GetUsersInput {
	id: number[];
}

export interface GetUsersResponse {
	status: HttpStatus;
	users: ShortUser[];
}

export interface GetFullUserResponse {
	status: HttpStatus;
	user: FullUser;
}

export interface SearchUserByNameResponse {
	status: HttpStatus;
	users: MiniUser[];
}

interface FullUser {
	info: User;
	profile_badges: ProfileBadge[];
	activity_feed: ActivityFeed[];
	clan: null;
	keys4: OverallKeyStats;
	keys7: OverallKeyStats;
}

interface ProfileBadge {
	id: number;
	name: string;
	description: string;
}

interface ActivityFeed {
	id: number;
	type: number;
	timestamp: string;
	map: { id: number; name: string };
}

interface OverallKeyStats {
	globalRank: number;
	countryRank: number;
	multiplayerWinRank: number;
	stats: KeyStats;
}

interface KeyStats {
	user_id: number;
	total_score: number;
	ranked_score: number;
	overall_accuracy: number;
	overall_performance_rating: number;
	play_count: number;
	fail_count: number;
	max_combo: number;
	replays_watched: number;
	total_marv: number;
	total_perf: number;
	total_great: number;
	total_good: number;
	total_okay: number;
	total_miss: number;
	total_pauses: number;
	multiplayer_wins: number;
	multiplayer_losses: number;
	multiplayer_ties: number;
	count_grade_x: number;
	count_grade_ss: number;
	count_grade_s: number;
	count_grade_a: number;
	count_grade_b: number;
	count_grade_c: number;
	count_grade_d: number;
}

type ShortUser = Pick<
	User,
	| 'id'
	| 'steam_id'
	| 'username'
	| 'country'
	| 'time_registered'
	| 'allowed'
	| 'privileges'
	| 'usergroups'
	| 'mute_endtime'
	| 'latest_activity'
	| 'avatar_url'
>;

type MiniUser = Pick<ShortUser, 'id' | 'username' | 'steam_id' | 'avatar_url'>;

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
	userpage: string;
	information: UserInformation;
	userpage_disabled: number;
	clan_id: null;
	online: boolean;
}

interface UserInformation {
	default_mode: number;
	discord: string;
	twitter: string;
	twitch: string;
	youtube: string;
	notif_action_mapset: boolean;
}
