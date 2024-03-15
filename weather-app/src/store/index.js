import { createStore } from 'vuex';

const DEFAULT_LOCATION = {
  latitude: 10,
  longitude: 10,
};

const store = createStore({
  state() {
    return {
      locationSelected: { ...DEFAULT_LOCATION },
    };
  },
  mutations: {
    setLocationSelected(state, { latitude, longitude }) {
      state.locationSelected = { latitude, longitude };
    },
  },
  actions: {
    async updateLocationSelected({ commit }, { latitude, longitude }) {
      commit('setLocationSelected', { latitude, longitude });
    },
  },
  getters: {
    getLocationSelected(state) {
      return state.locationSelected;
    },
  },
});

export default store;