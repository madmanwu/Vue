// 一、let命令

// （1）、基本用法：ES6新增了let命令，用来声明变量。用法类似于var，只在let命令所在的代码块内有效。

// 1.let声明的变量只在它所在的代码块有效。
/* {
    let a = 10;
    var b = 1;
}
console.log(a);
console.log(b);
*/

// 2.i在for循环内引用有效，在循环外引用报错
/* for (let i = 0; i < 10; i++) {
    console.log(i); // 123456789
} */
// console.log(i); i is not defined

// 3.变量i是var声明的，在全局范围内有效
/* var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
};
a[6](); 

使用let声明i，声明的变量在块级作用域内有效
var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6]();
*/

// 4.输出了三次abc，表明函数内部的变量i与循环变量i不在同一作用域
/* for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}; */

// （2）、不存在变量提升

// 1.var的情况会发生“变量提升”，变量可以在声明之前使用;let声明的变量一定要在声明之后使用
/* console.log(foo); // undefine
var foo = 2;

let bar = 2;
console.log(bar); */

// （3）、暂时性死区

// 1.只要块级作用域内存在let命令，它所声明的变量就绑定这个区域，不受外部影响。在let声明变量前，对tmp赋值会报错
/* var tmp = 123;
if (true) {
    tmp = 'abc';
    let tmp;
}; */

// 2.使用let声明变量之前，该变量都是不可用的这种语法成为“暂时性死区”
/* if (true) {
    tmp = 'abc';
    console.log(tmp);

    let tmp;
    console.log(tmp);

    tmp = 123;
    console.log(tmp);
}; */

// 3.变量x使用let声明，所以在声明之前，都属于x的“死区”,只要用到该变量就会报错;如果一个变量没有被声明，使用typeof就不会被报错；变量一定要在声明之后使用
/* typeof x;
let x; */
// typeof undeclared_variable; // undefine

// 4.y没有被声明
/* function bar (x = y, y = 2) {
    return [x, y];
}
bar(); */

/* function bar (x = 2, y = x) {
    return [x, y];
};
bar(); */

// var x = x; 不报错
// let x =x; 报错，在变量x的声明语句还没有执行完成前，就去取x的值

// (4)、不允许重复声明

// 1.let不允许在相同作用域内，重复声明同一个变量
/* function () {
    let a = 10;
    var a = 1;
};
function () {
    let a = 10;
    let a = 1;
}; */

/* function fun (arg) {
    let arg; // 报错
}; 

function fun (arg) {
    {
        let arg; // 不报错
    }
}; */

// 二、块级作用域

// (1)

// 1.内层变量可能会覆盖外层变量，原因在于变量提升，导致内层的tmp变量覆盖了外层的tmp变量

/* var tmp = new Date();
function f () {
    console.log(tmp);
    if (false) {
        var tmp = 'hello'
    };
}; */

// 2.用来计数的循环变量泄露为全局变量，变量i只用来控制循环，循环结束后，它并没有消失，泄露成了全局变量

/* var s = 'hello';
for (var i = 0; i < s.length; i++) {
    console.log(s[i]);
}
console.log(i); */

// (2)、ES6的块级作用域

// 1.外层代码块不受内层代码块的影响，如果两次都是用var定义变量n，最后输出的值才是10
/* function f1 () {
    let n = 5;
    if (true) {
        let n = 10;
    };
    console.log(n); 
}; */

// 2.ES6 允许块级作用域的任意嵌套，外层作用域无法读取内层作用域的变量
// {{{{{let insane = 'Hello World'}}}}};

// 3.内层作用域可以定义外层作用域的同名变量
/* {{{{
    let insane = 'Hello World';
    {let insane = 'Hello World'}
  }}}}; */

// 4.块级作用域的出现，实际上使得获得广泛应用的立即执行函数表达式（IIFE）不再必要了
// IIFE 写法
/* (function () {
    var tmp = ...;
    ...
}());
  
  // 块级作用域写法
{
    let tmp = ...;
    ...
} */

// (3).块级作用域与函数声明

// 1.函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明
// 情况一
/* if (true) {
    function f () {}
};

try {
    function f () {}
} catch (e) {

}; */
/* function f () { console.log('I am outside!'); }

(function () {
    if (false) {
    // 重复声明一次函数f
    function f () { console.log('I am inside!'); }
    }

    f();
}()); */
// 会得到“I am inside!”，因为在if内声明的函数f会被提升到函数头部，实际运行的代码如下
// ES5 环境
/* function f () { console.log('I am outside!'); }
(function () {
    function f () { console.log('I am inside!'); }
    if (false) {
    }
    f ();
}()); */

// 浏览器的 ES6 环境
/* function f () { console.log('I am outside!'); }

(function () {
  if (false) {
    // 重复声明一次函数f
    function f () { console.log('I am inside!'); }
    }

    f ();
}()); */
// Uncaught TypeError: f is not a function

// 浏览器的 ES6 环境
/* function f () { console.log('I am outside!'); }
(function () {
    var f = undefined;
    if (false) {
    function f () { console.log('I am inside!'); }
    }
    f ();
}()); */
// Uncaught TypeError: f is not a function

// 函数声明语句
/* {
    let a = 'secret';
    function f () {
        return a;
    }
};
  
  // 函数表达式
{
    let a = 'secret';
    let f = function () {
        return a;
    };
}; */

// ES6 的块级作用域允许声明函数的规则，只在使用大括号的情况下成立，如果没有使用大括号，就会报错
// 不报错
/* 'use strict';
if (true) {
  function f () {}
}

// 报错
'use strict';
if (true)
function f () {} */

// (4)、do表达式

// 1.块级作用域是一个语句，将多个操作封装在一起，没有返回值,块级作用域将两个语句封装在一起。但是，在块级作用域以外，没有办法得到t的值，因为块级作用域不返回值，除非t是全局变量
/* {
    let t = f ();
    t = t * t + 1;
}; */

// 2.使得块级作用域可以变为表达式，也就是说可以返回值，办法就是在块级作用域之前加上do，使它变为do表达式
/* let x = do {
    let t = f();
    t * t + 1;
}; */

// 三、const 命令
// (1)、基本用法
// 1.const声明一个只读的常量。一旦声明，常量的值就不能改变
/* const PI = 3.1415;
PI // 3.1415

PI = 3;
// TypeError: Assignment to constant variable. */

// 2.const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值
// const foo;
// SyntaxError: Missing initializer in const declaration

// 3.const的作用域与let命令相同：只在声明所在的块级作用域内有效

/* if (true) {
    const MAX = 5;
};
MAX;  */
// Uncaught ReferenceError: MAX is not defined

// 4.const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用
/* if (true) {
    console.log(MAX); // ReferenceError
    const MAX = 5;
} */

// 5.const声明的常量，也与let一样不可重复声明
/* var message = "Hello!";
let age = 25;

// 以下两行都会报错
const message = "Goodbye!";
const age = 30; */

// 1.常量foo储存的是一个地址，这个地址指向一个对象。不可变的只是这个地址，即不能把foo指向另一个地址，但对象本身是可变的，所以依然可以为其添加新属性

/* const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only */

// 2.常量a是一个数组，这个数组本身是可写的，但是如果将另一个数组赋值给a，就会报错

/* const a = [];
a.push('Hello'); // 可执行
a.length = 0;    // 可执行
a = ['Dave'];    // 报错 */

// 3.如果真的想将对象冻结，应该使用Object.freeze方法,常量foo指向一个冻结的对象，所以添加新属性不起作用，严格模式时还会报错

// const foo = Object.freeze({});

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
// foo.prop = 123;

// 4.除了将对象本身冻结，对象的属性也应该冻结
/* var constantize = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach( (key, i) => {
        if ( typeof obj[key] === 'object' ) {
            constantize( obj[key] );
        }
    });
}; */
