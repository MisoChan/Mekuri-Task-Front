import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const dataStore = createPersistedState(
  { // ストレージのキーを指定
    key: 'mekuriApp',
    // ストレージの種類を指定
    storage: window.sessionStorage
  }
)

export default createStore({
  state: {
    login_user: {}
  },
  mutations: {
    login_user (state, user) {
      state.login_user = user
    },
    // State初期化用
    Reset (state) {
      Object.assign(state, JSON.parse(sessionStorage.getItem('initialState')))
    }
  },
  getters: {
    getUser: (state) => {
      return state
    },
    getLanguage: (state) => {
      if (Object.keys(state.login_user).length) {
        return state.login_user.user_details.language
      }
      return ''
    }
  },
  actions: {
  },
  modules: {

  },
  plugins: [dataStore]
})
