// console.log('a.js');

// 默认导出
export default '默认导出';
// 具名导出
export const obj = {
    name: 'liuning',
    age: 21
};
export const obj1 = {
    name: 'wuman',
    age: 21
};
export const obj2 = {
    name: 'guoyingying',
    age: 21
};
export {
    obj1 as Obj1,
    obj2 as Obj2,
    obj as Obj
};
