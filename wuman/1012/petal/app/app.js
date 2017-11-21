import Vue from 'vue';
import './style/header/reset.css';
// import './style/header/font-awesome.min.css';
import './style/header/common.css';
import App from './main.js';
const vm = new Vue({
    el: '#app',
    template: App
});
console.log(vm);
