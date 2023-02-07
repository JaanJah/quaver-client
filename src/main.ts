import request from './http/request';

request('/users/full/23', {}).then((res) => {
	console.log('res', res);
});
