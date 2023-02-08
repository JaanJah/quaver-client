import QuaverClient from './QuaverClient';

const client = new QuaverClient();

async function main() {
	// log('getUsers', await client.users.getUsers({ id: [23, 24] }));
	// log('getUserById', await client.users.getUserById(23));
	log('searchUserByName', await client.users.searchUserByName('Progress'));
}

function log(name: string, input: object) {
	console.log(name, JSON.stringify(input, null, 2));
}

main().then();
