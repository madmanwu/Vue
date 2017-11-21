// 字符串的扩展

// 1、字符串的Unicode表示法

// (1)、JavaScript 允许采用\uxxxx形式表示一个字符，其中xxxx表示字符的 Unicode 码点.
// "\u0061"
// "a"

// 这种表示法只限于码点在\u0000~\uFFFF之间的字符。超出这个范围的字符，必须用两个双字节的形式表示。
// "\uD842\uDFB7"
// "𠮷"

// "\u20BB7"
// " 7"

// 如果直接在\u后面跟上超过0xFFFF的数值（比如\u20BB7），JavaScript会理解成\u20BB+7。由于\u20BB是一个不可打印字符，所以只会显示一个空格，后面跟着一个7。

// "\u{20BB7}"
// "𠮷"

// "\u{41}\u{42}\u{43}"
// "ABC"

// let hello = 123;
// hell\u{6F} // 123

// '\u{1F680}' === '\uD83D\uDE80'
// true

// JavaScript 共有6种方法可以表示一个字符。
// '\z' === 'z'  // true
// '\172' === 'z' // true
// '\x7A' === 'z' // true
// '\u007A' === 'z' // true
// '\u{7A}' === 'z' // true

// 2、codePoinAt()

// JavaScript内部，字符以UTF-16的格式储存，每个字符固定为2个字节。对于那些需要4个字节储存的字符（Unicode码点大于0xFFFF的字符），JavaScript会认为它们是两个字符。而且charAt方法无法读取整个字符，charCodeAt方法只能分别返回前两个字节和后两个字节的值。

/* var s = "𠮷";

s.length // 2
s.charAt(0) // ''
s.charAt(1) // ''
s.charCodeAt(0) // 55362
s.charCodeAt(1) // 57271 */

// ES6提供了codePointAt方法，能够正确处理4个字节储存的字符，返回一个字符的码点。
/* let s = '𠮷a';

s.codePointAt(0) // 134071
s.codePointAt(1) // 57271

s.codePointAt(2) // 97
 */

// codePointAt方法返回的是码点的十进制值，如果想要十六进制的值，可以使用toString方法转换一下。

/* let s = '𠮷a';
 
 s.codePointAt(0).toString(16) // "20bb7"
 s.codePointAt(2).toString(16) // "61" */

/* let s = '𠮷a';
for (let ch of s) {
console.log(ch.codePointAt(0).toString(16));
}
// 20bb7
// 61 */

// codePointAt方法是测试一个字符由两个字节还是由四个字节组成的最简单方法。
/* function is32Bit(c) {
    return c.codePointAt(0) > 0xFFFF;
  }
  
  is32Bit("𠮷") // true
  is32Bit("a") // false */

// 3、String.fromCodePoint()

// ES5提供String.fromCharCode方法，用于从码点返回对应字符，但是这个方法不能识别32位的UTF-16字符（Unicode编号大于0xFFFF）。

// String.fromCharCode(0x20BB7)
// "ஷ"

// String.fromCodePoint(0x20BB7)
// "𠮷"
// String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y'
// true

// 4、字符串的遍历器接口
/* for (let codePoint of 'foo') {
console.log(codePoint)
} */
// "f"
// "o"
// "o"

/* let text = String.fromCodePoint(0x20BB7);

for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}
// " "
// " "

for (let i of text) {
  console.log(i);
}
// "𠮷" */

// 5、at()

/* 'abc'.charAt(0) // "a"
'𠮷'.charAt(0) // "\uD842" */

/* 'abc'.at(0) // "a"
'𠮷'.at(0) // "𠮷" */

// 6、normalize()

/* '\u01D1'==='\u004F\u030C' //false

'\u01D1'.length // 1
'\u004F\u030C'.length // 2 */

/* '\u01D1'.normalize() === '\u004F\u030C'.normalize()
// true */

// '\u004F\u030C'.normalize('NFC').length // 1
// '\u004F\u030C'.normalize('NFD').length // 2

// 7、includes(), startsWith(), endsWith()

/* let s = 'Hello world!';

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true */

/* let s = 'Hello world!';

s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false */

// 8、repeat()

/* 'x'.repeat(3) // "xxx"
'hello'.repeat(2) // "hellohello"
'na'.repeat(0) // "" */

// 'na'.repeat(2.9) // "nana"

// 'na'.repeat(Infinity)
// RangeError
// 'na'.repeat(-1)
// RangeError

// 'na'.repeat(-0.9) // ""

// 'na'.repeat(NaN) // ""

// 'na'.repeat('na') // ""
// 'na'.repeat('3') // "nanana"

// 9、padStart()，padEnd()

/* 'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'

'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba' */

/* 'xxx'.padStart(2, 'ab') // 'xxx'
'xxx'.padEnd(2, 'ab') // 'xxx' */

// 'abc'.padStart(10, '0123456789')
// '0123456abc'

/* 'x'.padStart(4) // '   x'
'x'.padEnd(4) // 'x   ' */

/* '1'.padStart(10, '0') // "0000000001"
'12'.padStart(10, '0') // "0000000012"
'123456'.padStart(10, '0') // "0000123456" */

/* '12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
'09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12" */

// 10、模板字符串

/* $('#result').append(
'There are <b>' + basket.count + '</b> ' +
'items in your basket, ' +
'<em>' + basket.onSale +
'</em> are on sale!'
); */

/* $('#result').append(`
There are <b>${basket.count}</b> items
 in your basket, <em>${basket.onSale}</em>
are on sale!
`); */

// 普通字符串
// `In JavaScript '\n' is a line-feed.`

// 多行字符串
// `In JavaScript this is
// not legal.`

// console.log(`string text line 1
// string text line 2`);

// 字符串中嵌入变量
// let name = "Bob", time = "today";
// `Hello ${name}, how are you ${time}?`

// let greeting = `\`Yo\` World!`;

/* $('#list').html(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`); */

/* $('#list').html(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`.trim()); */

/* function authorize (user, action) {
    if (!user.hasPrivilege (action)) {
        throw new Error (
            // 传统写法为
            // 'User '
            // + user.name
            // + ' is not authorized to do '
            // + action
            // + '.'
            `User ${user.name} is not authorized to do ${action}.`);
    }
};
 */

/* let x = 1;
let y = 2;

`${x} + ${y} = ${x + y}`
// "1 + 2 = 3"

`${x} + ${y * 2} = ${x + y * 2}`
// "1 + 4 = 5"

let obj = {x: 1, y: 2};
`${obj.x + obj.y}`
// "3" */

/* function fn () {
    return "Hello World";
}; */

// `foo ${fn()} bar`
// foo Hello World bar

// 变量place没有声明
// let msg = `Hello, ${place}`;
// 报错

// `Hello ${'World'}`
// "Hello World"

/* const tmpl = addrs => `
<table>
${addrs.map(addr => `
  <tr><td>${addr.first}</td></tr>
  <tr><td>${addr.last}</td></tr>
`).join('')}
</table>
`; */

/* const data = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
];

console.log(tmpl (data) ); */
// <table>
//
//   <tr><td><Jane></td></tr>
//   <tr><td>Bond</td></tr>
//
//   <tr><td>Lars</td></tr>
//   <tr><td><Croft></td></tr>
//
// </table>

/* // 写法一
let str = 'return ' + '`Hello ${name}!`';
let func = new Function('name', str);
func('Jack') // "Hello Jack!"

// 写法二
let str = '(name) => `Hello ${name}!`';
let func = eval.call(null, str);
func('Jack') // "Hello Jack!" */

// 11、实例：模板编译

/* let template = `
<ul>
  <% for(let i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`; */

/* echo('<ul>');
for(let i=0; i < data.supplies.length; i++) {
  echo('<li>');
  echo(data.supplies[i]);
  echo('</li>');
};
echo('</ul>'); */

/* let evalExpr = /<%=(.+?)%>/g;
let expr = /<%([\s\S]+?)%>/g;

template = template
  .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
  .replace(expr, '`); \n $1 \n  echo(`');

template = 'echo(`' + template + '`);'; */

/* let script =`
(function parse(data){
    let output = "";

    function echo(html){
        output += html;
    }

    ${ template }

    return output;
})`;

return script; */

/* function compile (template) {
    const evalExpr = /<%=(.+?)%>/g;
    const expr = /<%([\s\S]+?)%>/g;

    template = template
        .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
        .replace(expr, '`); \n $1 \n  echo(`');

    template = 'echo(`' + template + '`);';

    let script = `
    (function parse(data){
        let output = "";
  
    function echo(html){
        output += html;
    }
  
    ${template}
  
    return output;
    })`;

    return script;
}; */

/* let parse = eval(compile(template));
div.innerHTML = parse({ supplies: [ "broom", "mop", "cleaner" ] }); */
//   <ul>
//      <li>broom</li>
//      <li>mop</li>
//      <li>cleaner</li>
//   </ul>

// 12、标签模板

/* alert`123`
// 等同于
alert(123)
 */

/* let a = 5;
let b = 10;

tag`Hello ${ a + b } world ${ a * b }`;
// 等同于
tag(['Hello ', ' world ', ''], 15, 50);
*/

/* function tag (stringArr, value1, value2) {
    // ...
};
// 等同于

function tag (stringArr, ...values) {
    // ...
}; */

// tag(['Hello ', ' world ', ''], 15, 50)

/* let a = 5;
let b = 10;

function tag (s, v1, v2) {
    console.log(s[0]);
    console.log(s[1]);
    console.log(s[2]);
    console.log(v1);
    console.log(v2);

    return "OK";
}

tag`Hello ${a + b} world ${a * b}`; */
// "Hello "
// " world "
// ""
// 15
// 50
// "OK"

/* let total = 30;
let msg = passthru`The total is ${total} (${total*1.05} with tax)`;

function passthru (literals) {
    let result = '';
    let i = 0;

    while (i < literals.length) {
    result += literals[i++];
    if (i < arguments.length) {
        result += arguments[i];
    }
}

    return result;
}

msg // "The total is 30 (31.5 with tax)"
 */

/* function passthru (literals, ...values) {
    let output = '';
    for (let index = 0; index < values.length; index++) {
        output += literals[index] + values[index];
};
    output += literals[index]
    return output;
} */

/* let message =
SaferHTML`<p>${sender} has sent you a message.</p>`;

function SaferHTML(templateData) {
    let s = templateData[0];
    for (let i = 1; i < arguments.length; i++) {
        let arg = String(arguments[i]);
// Escape special characters in the substitution.
        s += arg.replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
// Don't escape special characters in the template.
        s += templateData[i];
    }
    return s;
} */

/* let sender = '<script>alert("abc")</script>'; // 恶意代码
let message = SaferHTML`<p>${sender} has sent you a message.</p>`;

message */
// <p>&lt;script&gt;alert("abc")&lt;/script&gt; has sent you a message.</p>

// i18n`Welcome to ${siteName}, you are visitor number ${visitorNumber}!`
// "欢迎访问xxx，您是第xxxx位访问者！"

// 下面的hashTemplate函数
// 是一个自定义的模板处理函数
/* let libraryHtml = hashTemplate`
<ul>
    #for book in ${myBooks}
        <li><i>#{book.title}</i> by #{book.author}</li>
    #end
</ul>
`; */

/* jsx`
<div>
    <input
        ref='input'
        onChange='${this.handleChange}'
        defaultValue='${this.state.value}' />
        ${this.state.value}
</div>
` */










// 函数的扩展

// 函数参数的默认值

// 基本用法
/* function log (x, y = 'World') {
    console.log(x, y);
}
log('Hello'); // Hello World
log('Hello', 'China'); // Hello China
log('Hello', ''); // Hello */

/* function Point (x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

const p = new Point();
console.log(p); // Point{ x: 0, y: 0 } */

// 与解构赋值默认值结合使用 

/* function foo ({x, y = 5}) {
    console.log(x, y);
}

foo({}); // undefined 5
foo({x: 1}); // 1 5
foo({x: 1, y: 2}); // 1 2
foo(); // TypeError: Cannot read property 'x' of undefined */

/* function foo ({x, y = 5} = {}) {
    console.log(x, y);
}

foo(); // undefined 5 */

/* function m1 ({x = 0, y = 0} = {}) {
    return [x, y];
} */

/* function f () {
    let m = 1;
    let n = 2;
    return g(m + n);
}
f();

// 等同于
function f () {
    return g (3);
}
f();

// 等同于
g(3); */

// 尾调用 就是指某个函数的最后一步是调用另一个函数。
// 尾调用不一定出现在函数尾部，只要是最后一步操作即可。









// 数值的扩展

// 二进制和八进制表示法
// console.log(0b111110111 === 503); true 二进制
// console.log(0o767 === 503); true 八进制

// 非严格模式
/* (function () {
    console.log( 0o11 === 011 ); // true
})(); */

// 严格模式
/* (function () {
    'use strict';
    console.log(0o11 === 011);
})(); // 报错 */

// 使用Number()转换为十进制
// console.log(Number('0b111')); // 7
// console.log(Number('0o10')); // 8

// Number.isFinite(), Number.isNaN()

// Number.isFinite()用来检查一个数值是否为有限的（finite）

// console.log(Number.isFinite(15)); true

// console.log(Number.isFinite(NaN)); false
// console.log(Number.isFinite(isFinite)); false
// console.log(Number.isFinite(-isFinite)); false
// console.log(Number.isFinite('foo')); false
// console.log(Number.isFinite('15')); false
// console.log(Number.isFinite(true)); false

// 部署Number.isFinite方法

/* (function () {
    var globalIsFinite = global.isFinite;
    Object.defineProperty(Number, 'isFinite', {
        value: function isFinite (value) {
            return typeof value === 'number' && globalIsFinite(value);
        },
        configurable: true,
        enumerable: false,
        writable: true
    });
})(this); */

// Number.isNaN()用来检查一个值是否为NaN
// console.log(Number.isNaN(NaN)); true
/* Number.isNaN(NaN) // true
Number.isNaN(15) // false
Number.isNaN('15') // false
Number.isNaN(true) // false
Number.isNaN(9/NaN) // true
Number.isNaN('true'/0) // true
Number.isNaN('true'/'true') // true */

// 部署Number.isNaN()
/* (function () {
    var globalIsNaN = global.isNaN;
    Object.defineProperty(Number, 'isNaN', {
        value: function isNaN (value) {
            return typeof value === 'number' && globalIsNaN;
        },
        configurable: true,
        enumerable: true,
        writable: true
    });
})(this); */

// Number.isFinite()对于非数值一律返回false, Number.isNaN()只有对于NaN才返回true，非NaN一律返回false

// Number.parseInt(), Number.parseFloat()

/* Number.parseInt === parseInt // true
Number.parseFloat === parseFloat // true */

// Number.isInteger()

// Number.isInteger()用来判断一个值是否为整数

/* console.log(Number.isInteger(25)); true
console.log(Number.isInteger(25.0)); true
console.log(Number.isInteger(25.1)); false
console.log(Number.isInteger('15')); false
console.log(Number.isInteger(true)); false */

// 部署Number.isInteger()
/* (function (global) {
    var floor = Math.floor,
        isFinite = global.isFinite;
    Object.defineProperty(Number, 'isInteger', {
        value: function isInteger (value) {
            return typeof value === 'number' && isFinite(value) && floor(value) === value;
        },
        configurable: true,
        enumerable: true,
        writable: true
    });
})(this); */

// Number.EPSILON 

// 新增一个极小的常量Number.EPSILON

// console.log(Number.EPSILON); 2.220446049250313e-16
// console.log(Number.EPSILON.toFixed(20)); 0.00000000000000022204

// 设置一个误差范围,如果这个误差能够小于Number.EPSILON，我们就可以认为得到了正确结果
// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log(5.551115123125783e-17.toFixed(20)); // 0.00000000000000005551

// console.log(5.551115123125783e-17 < Number.EPSILON); true

// 部署了一个误差检查函数
/* function withinErrorMargin (left, right) {
    return Math.abs(left - right) < Number.EPSILON;
};
withinErrorMargin(0.1 + 0.2, 0.3)
// true
withinErrorMargin(0.2 + 0.2, 0.3)
// false */

// 安全整数和Number.isSafeInteger()

// JavaScript能够准确表示的整数范围在-2^53到2^53之间（不含两个端点）

// Number.MAX_SAFE_INTEGER
// console.log(Math.pow(2, 53)); // 9007199254740992 2的53次方

// Number.MIN_SAFE_INTEGER
// console.log(Math.pow(-2, 53)); // -9007199254740992 -2的53次方

// console.log(Math.pow(2, 53) + 1); // 9007199254740992 
// console.log(Math.pow(2, 53) === Math.pow(2, 53) + 1); true

// Number.isSafeInteger()则是用来判断一个 整数 是否落在这个 范围 之内。

// 函数的实现很简单
/* Number.isSafeInteger = function (n) {
    return (typeof n === 'number' && Math.rund(n) === n && Number.MIN_SAFE_INTEGER <= n && n <= Number.MAX_SAFE_INTEGER);
}; */

// Math对象的扩展

// ES6在Math对象上新增了17个与数学相关的方法。所有这些方法都是静态方法，只能在Math对象上调用。

// Math.trunc方法用于去除一个数的小数部分，返回整数部分。存在隐士类型转换，强装换字符串为NaN
// console.log(Math.trunc(4.1)); // 4

// Math.sign() 

/* 参数为正数，返回+1；
参数为负数，返回-1；
参数为0，返回0；
参数为-0，返回-0;
其他值，返回NaN。 */
/* Math.sign(-5) // -1
Math.sign(5) // +1
Math.sign(0) // +0
Math.sign(-0) // -0
Math.sign(NaN) // NaN
Math.sign('9'); // +1
Math.sign('foo'); // NaN
Math.sign();      // NaN */

// Math.cbrt() 3次方，存在隐士类型转换

// Math.cbrt()

// Math.clz32(),Math.clz32方法返回一个数的32位无符号整数形式有多少个前导0。
/* Math.clz32(0) // 32
Math.clz32(1) // 31
Math.clz32(1000) // 22
Math.clz32(0b01000000000000000000000000000000) // 1
Math.clz32(0b00100000000000000000000000000000) // 2 */

// 左移运算符（<<）与Math.clz32方法直接相关。
/* Math.clz32(0) // 32
Math.clz32(1) // 31
Math.clz32(1 << 1) // 30
Math.clz32(1 << 2) // 29
Math.clz32(1 << 29) // 2
*/

// Math.clz32方法只考虑整数部分。
/* Math.clz32(3.2) // 30
Math.clz32(3.9) // 30 */

// Math.clz32方法会将它们先转为数值，然后再计算

/* Math.clz32() // 32
Math.clz32(NaN) // 32
Math.clz32(Infinity) // 32
Math.clz32(null) // 32
Math.clz32('foo') // 32
Math.clz32([]) // 32
Math.clz32({}) // 32
Math.clz32(true) // 31 */

// Math.imul()

