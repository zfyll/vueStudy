// 1.导入的{}(对象)中定义的变量
import {flag,sum} from "./aaa.js";

if(flag){
    console.log('小明是天才，哈哈哈');
    console.log(sum(20,30));
}

// 2.直接导入export定义的变量
import {num1,height} from "./aaa.js";

console.log(num1);
console.log(height);

// 3.导入export的function (函数)
import {mu1,Person} from "./aaa/js";

console.log(mu1(30,50));
// 4.导入export的class（类）
const p =new Person();
p.run()

// 5.导入export default 中的内容
// addr自定义
import addr from "./aaa.js";
addr("你好啊");

// 6.统一全部导入
// import {flag,num,num1,height,Person,mul,sum} from "./aaa.js"
// aaa名字自定义
import * as aaa from './aaa.js'

console.log(aaa.flag);
console.log(aaa.height);