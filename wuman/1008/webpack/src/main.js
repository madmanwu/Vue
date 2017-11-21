/* let a = require('./libs/a.js');
let b = require('./libs/b'); */

// 默认导入
/* import a from './libs/a';
console.log(a); */
// 具名导入
/* import {obj, obj1, obj2} from './libs/a';
console.log(obj, obj1, obj2); */
// 默认 + 具名导入
/* import a, {obj, obj1, obj2} from './libs/a';
console.log(a, obj, obj1, obj2); */
// 重命名导入
/* import {obj as Obj} from './libs/a';
console.log(Obj); */
/* import {Obj1, Obj2} from './libs/a';
console.log(Obj1, Obj2); */
// 所有的导入都转为对象
/* import * as newObj from './libs/a';
console.log(newObj); */

import css from './css/css.css';
console.log(css);
import less from './less/less.css';
console.log(less);

import scss from './scss/scss.scss';

import pic from './images/img.jpg';
let img = new Image();
img.src = pic;
let imgbox = document.getElementById('img');
imgbox.appendChild(img);
