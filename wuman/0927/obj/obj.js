// 对象的扩展

// 属性的简洁表示法
/* const foo = 'bar';
const baz = {foo};
console.log(baz); // {foo:'baz'};
 */

// 简洁写法的属性名总是字符串

/* let lastWord = 'last word';

const a = {
'first word': 'hello',
[lastWord]: 'world'
};

a['first word'] // "hello"
a[lastWord] // "world"
a['last word'] // "world" 
*/

// 属性名表达式与简洁表示法，不能同时使用，会报错。
// 报错
/* const foo = 'bar';
const bar = 'abc';
const baz = { [foo] };

// 正确
const foo = 'bar';
const baz = { [foo]: 'abc'}; */

