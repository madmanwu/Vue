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
import './libs/style.css';
import './libs/style.less';
import './libs/style.scss';
import imgSrc from './libs/img.jpg';
let img = new Image();
img.src = imgSrc;
document.getElementsByClassName('big')[0].appendChild(img);
