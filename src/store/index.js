import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        menus: [],
        categories: []
    },
    mutations: {
        setMenus(state, menus) {
            state.menus = menus;
        },
        setCategories(state, categories) {
            state.categories = categories;
        }
    }
});

export default store;
