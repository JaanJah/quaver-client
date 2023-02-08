import QuaverClient from './QuaverClient';

const client = new QuaverClient();

client.users.getUsers({ id: [23, 24] }).then((res) => {
	console.log('getUsers', JSON.stringify(res, null, 2));
});

client.users.getUserById(23).then((res) => {
	console.log('getUserById', JSON.stringify(res, null, 2));
});
