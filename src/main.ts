import QuaverClient from './QuaverClient';

const client = new QuaverClient();

client.users.getUsers({ id: [23, 24] }).then((res) => {
	console.log('res', res);
});
