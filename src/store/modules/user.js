import {
  login
} from '../../api/account';
import jwt from 'jwt-decode'

const user = {
  state: {
    roles: [],
    name: '',
    avatar: '',
    token: localStorage.getItem('dj_token')
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    }
  },
  actions: {
    Login({
      commit
    }, params) {
      const userName = params.userName.trim();
      return new Promise((resolve, reject) => {
        login(userName, params.password).then(response => {
          const data = response.data;
          localStorage.setItem('dj_token', data.token);
          commit('SET_TOKEN', data.token);
          resolve();
        }).catch(error => {
          reject(error);
        });
      })
    },
    // 登出
    LogOut({
      commit
    }) {
      commit('SET_TOKEN', '');
      commit('SET_ROLES', []);
      localStorage.removeItem('dj_token');
    },
    // 获取用户信息
    GetInfo({
      commit,
      state
    }) {
      const data = jwt(state.token);
      commit('SET_ROLES', data.role);
      commit('SET_NAME', data.name);
      commit('SET_AVATAR', data.avatarUrl);
    }
  }
}

export default user;
