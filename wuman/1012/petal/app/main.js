import Vue from 'vue';
import header from './common/header.js';
import content from './common/content.js';
import dialog from './common/dialog.js';

// import footer from './footer.js'
Vue.component('my-header', header);

Vue.component('my-content', content);

Vue.component('my-dialog', dialog);

let tmp = `<div id="app">
<my-header></my-header>
<my-content></my-content>
<my-dialog></my-dialog>
</div>`;
export default tmp;
