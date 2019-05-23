import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    storage: {
      path: window.location.origin + '/storage/'
    }
  },
  
  getters: {},
  
  mutations: {},
  
  actions: {},
});