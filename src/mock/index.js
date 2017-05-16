import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import accountApi from './account';

const mock = new MockAdapter(axios);

mock.onPost('/account/login').reply(accountApi.login);
export default mock;
