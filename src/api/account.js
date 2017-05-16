import { fetch } from '../utils/fetch';

export function login(userName, password) {
  const data = {
    userName,
    password
  };
  return fetch({
    url: '/account/login',
    method: 'post',
    params: data
  });
}
