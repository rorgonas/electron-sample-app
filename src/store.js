import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase';
import router from '@/router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: '',
    user: null,
    isAuthenticated: false,
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },
    SET_IS_AUTHENTICATED(state, payload) {
      state.isAuthenticated = payload;
    },
  },
  actions: {
    userLogin({ commit }, { email, password }) {
      firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(user => {
            commit('SET_USER', user);
            commit('SET_IS_AUTHENTICATED', true);
            router.push('/about');
          })
          .catch(() => {
            commit('SET_USER', null);
            commit('SET_IS_AUTHENTICATED', false);
            router.push('/');
          });
    },
    userJoin({ commit }, { email, password }) {
      firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => {
            commit('SET_USER', user);
            commit('SET_IS_AUTHENTICATED', true);
            router.push('/about');
          })
          .catch(() => {
            commit('SET_USER', null);
            commit('SET_IS_AUTHENTICATED', false);
            router.push('/');
          });
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.user !== null && state.user !== undefined;
    }
  }
})