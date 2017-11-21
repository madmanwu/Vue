import Vue from 'vue';
import Vuex from 'vuex';
import actions from './action.js';
import mutations from './mutations.js';
Vue.use(Vuex);
const state = {
    count: 0,
    username: ''
};
export default new Vuex.Store({
    state,
    actions,
    mutations
});
