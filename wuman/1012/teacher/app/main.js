import Vue from 'vue';
import header from './common/header.js';
import content from './common/content.js';
// import footer from './footer.js'
Vue.component('my-header', header);
Vue.component('my-content', content);

let tmp = `<div id="box">
            <my-header></my-header>
            <my-content></my-content>
          </div>`;
export default tmp;
