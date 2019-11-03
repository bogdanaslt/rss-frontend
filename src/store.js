import Vue from 'vue';
import Vuex from 'vuex';
import UserService from "./service/UserService";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: null
    },
    mutations: {
        setUser(state, data) {
            state.user = data;
        }
    },
    actions: {
        getUser({ commit }) {
            return UserService.user();
        }
    }
});

export default store;