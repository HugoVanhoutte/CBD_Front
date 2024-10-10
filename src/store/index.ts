import { createStore } from 'vuex';
import { ProductQuantity, User } from '../../config';

export default createStore({
  state: {
    user: {
      id: 1 as number,
      email: '' as string,
      username: '' as string,
      basket: [] as ProductQuantity[],
      favorites: [] as number[],
    } as User | undefined,
    token: '' as string | undefined,
  },
  getters: {
    getUserBasket(state) {
      if (!state.user) {
        return undefined;
      }
      return state.user.basket as ProductQuantity[] | undefined;
    },
  },
  mutations: {
    setToken: (state, token): void => {
      state.token = token;
      localStorage.setItem('token', token);
    },
    setUser: (state, user: User): void => {
      state.user = user;
    },
  },
  actions: {
    setToken({ commit }, token: string): void {
      commit('setToken', token);
      commit('setUser', atob(token.split('.')[1]));
    },
    logout({ commit }) {
      commit('logout');
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
  },
  modules: {
  },
});
