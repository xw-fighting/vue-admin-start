const app = {
  state: {
    sidebar: {
      opened: localStorage.getItem('sidebarStatus') === '1'
    },
    theme: 'default'
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        localStorage.setItem('sidebarStatus', 0);
      } else {
        localStorage.setItem('sidebarStatus', 1);
      }
      state.sidebar.opened = !state.sidebar.opened;
    }
  },
  actions: {
    ToggleSideBar: ({
      commit
    }) => {
      commit('TOGGLE_SIDEBAR')
    },
    setTheme: ({
      commit
    }, theme) => {
      commit('SET_THEME', theme)
    }
  }
}

export default app;
