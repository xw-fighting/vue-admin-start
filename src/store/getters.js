const getters = {
  token: state => state.user.token,
  roles: state => state.user.roles,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  sidebar: state => state.app.sidebar
};

export default getters
