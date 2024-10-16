import { createStore } from 'vuex';
import { User } from '../../config';

export default createStore({
  state: {
    user: undefined as undefined | User,
  },
  getters: {
    getUser: (state) => state.user,
    getBasketLength: (state) => (state.user && state.user.basket ? state.user.basket.length : 0),
    getToken: (state) => () => localStorage.getItem('token'),
    getUserFromToken: (state) => (token: string) => JSON.parse(atob(token.split('.')[1])),
  },
  mutations: {
    setToken: (state, token: string): void => {
      localStorage.setItem('token', token);
    },
    setUser: (state, user: User): void => {
      state.user = user;
    },
  },
  actions: {
    async login({ commit }, user: User) {
      const res = await fetch('http://localhost:3001/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user: {
            email: user.email,
            password: user.password,
          },
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(`${res.status}: ${data.message}`);
        throw new Error(`${res.status}: ${data.message}`);
        // TODO check
      }
      commit('setToken', data.token);
      return undefined;
    },
    async fetchUser({ commit }, userId: number) {
      const res = await fetch(`http://localhost:3001/api/users/${userId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', Authorization: this.getters.getToken() },
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(`${res.status}: ${data.message}`);
        throw new Error(`${res.status}: ${data.message}`);
      }
      commit('setUser', JSON.parse(data));
    },
    async updateUser({ state }) {
      if (!state.user) {
        return undefined;
      }
      const res = await fetch(`http://localhost:3001/api/users/${state.user.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: this.getters.getToken() },
        body: JSON.stringify({
          user: state.user,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(`${res.status}: ${data.message}`);
        throw new Error(`${res.status}: ${data.message}`);
      }
      return undefined;
    },
  },
  modules: {
  },
});
