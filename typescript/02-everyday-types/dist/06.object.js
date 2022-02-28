"use strict";
function printCoord(pt) {
    console.log(pt.x);
    console.log(pt.y);
}
printCoord({
    x: 3,
    y: 7
});
// last后面的？表示该参数可传可不传 string | undefined
function printName(obj) {
    var _a;
    //  console.log(obj.last.toUpperCase()); 报错对象可能为“未定义”
    // if (obj.last !== undefined) {
    //     console.log(obj.last.toUpperCase())
    // }
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
printName({
    first: 'Fe'
});
printName({
    first: 'Fe',
    last: 'lu'
});
