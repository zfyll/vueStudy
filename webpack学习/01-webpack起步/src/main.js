// 1使用commonjs的模块化规范
const {add,mu1} =require('./mathUtils.js');

console.log(add(20,30));
console.log(mu1(20,30));
// 使用ES6的模块化的规范
import {name,age,height} from "./info.js";

console.log(name);
console.log(age);
console.log(height);