// 扩展运算符(...)
/* function push (array, ...items) {
    array.push(...item);
}; */

/* let aArr = [1, 3, 5];
let bArr = [2, 4, 6];
function push (aArr, ...bArr) {
    aArr.push(...bArr);
};
console.log(aArr); */

/* let array = {
    '0':'a',
    '1':'b',
    '2':'c',
    length: 3
};
var arr1 = [].slice.call(array);
console.log(arr1); // ['a', 'b', 'c']
let  arr2 = Array.from(array);
console.log(arr2); // ['a', 'b', 'c'] */

/* var a1 = [1, 2, 3];
var a2 = [4, 5, 6];
console.log([].push.apply(a1, a2));
console.log(a1); // 把a2push到a1里面了，a1继承了push的方法 */

/* let p = document.querySelectorAll('p');
Array.from(p).forEach((v) => {
    console.log(v);
}); */

/* function fn (a, b, c) {
    console.log(arguments);
    console.log(Array.from(arguments));
}
fn(1, 2, 3); */

// console.log(Array.from({length: 3})); // 数组的长度
// [undefined, undefined, undefined]

/* [1, 2, 3, 4].map((a, b) => {
    console.log(a); // 数值
    console.log(b); // 下标
}); */

/* let obj = {
    '0':'wm',
    '1':'ln',
    length: 2
};
console.log(Array.from(obj, x => x + '...')); */

/* function typeofs () {
    return Array.from(arguments, value => typeof value);
};
let arr = typeofs([], NaN, 1);
console.log(arr); */

// 生成空数组
/* var arr = [];
new Array(); */

// console.log(Array.of(3, 11, 2)); // [3, 11, 2];
// console.log(Array.of(3)); // [3]
// console.log(Array.of(3).length); // 1

// console.log(Array()); // []
// console.log(Array(3)); // [, , ,]
// console.log(Array(3, 2, 4)); // [3, 2, 4]

// console.log([6, 7, 8, 9].copyWithin(1, 2));
// console.log([0, 5, 7, 6, 9].copyWithin(1, 4));
// console.log([3, 7, 9, 9].copyWithin(0, 2));
// console.log([4, 5, 8, 7].copyWithin(1, 2));
