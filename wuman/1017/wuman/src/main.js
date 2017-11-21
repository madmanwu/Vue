// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Mint from 'mint-ui';
import mock from './mockjs';
import router from './router';
import './assets/css/font-awesome.min.css';
import './assets/css/style.min.css';
import './assets/css/common.css';
import './assets/css/reset.css';
import Vuex from 'vuex';
Vue.use(Vuex);
Vue.use(Mint);
mock.boostap();
Vue.config.productionTip = false;
/* eslint-disable no-new */

Vue.config.barseUrl = '';
if (process.env.NODE_ENV === 'development') {
    Vue.config.barseUrl = 'http://www.baidu.com';
};
const store = new Vuex.Store({
});
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App },
    mounted () {
        this.$store.state.count = 100;
    }
});
