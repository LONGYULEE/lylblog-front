import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        menus: []
    },
    mutations: {
        setMenus(state, menus) {
            state.menus = menus;
        }
    }
});

export default store;
