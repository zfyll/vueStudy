// 1使用commonjs的模块化规范
const {add,mu1} =require('../src/js/mathUtils');

console.log(add(20,30));
console.log(mu1(20,30));
// 使用ES6的模块化的规范
import {name,age,height} from "../src/js/info";

console.log(name);
console.log(age);
console.log(height);