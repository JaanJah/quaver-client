import HttpClient from './http/HttpClient';
import Leaderboard from './routes/Leaderboard';
import Maps from './routes/Maps';
import Miscellaneous from './routes/Miscellaneous';
import Mapsets from './routes/Mapsets';
import Multiplayer from './routes/Multiplayer';
import Playlist from './routes/Playlist';
import Scores from './routes/Scores';
import Users from './routes/Users';
import Web from './routes/Web';

export default class QuaverClient {
	public leaderboard = new Leaderboard();
	public maps = new Maps();
	public mapsets = new Mapsets();
	public misc = new Miscellaneous();
	public multiplayer = new Multiplayer();
	public playlist = new Playlist();
	public scores = new Scores();
	public users = new Users();
	public web = new Web();

	public version = 'v1';

	constructor() {}
}
