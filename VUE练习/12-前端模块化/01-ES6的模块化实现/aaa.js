let name='小明'
let age=18
let flag=true
function sum(num1,num2)
{
    return num1 + num2
}

if (flag){
    console.log(sum(20,30));
}

//导出方式一：作为{}(对象)导出
export {
    flag,sum
    // flag:flag,sum:sum的缩写
} 

// 2.导出方式二：直接导出
let num1=1000;
export {
    num1
};
export let num1=1000;
export let height=1.88;

// 3.导出方式三：导出函数
export function mu1(num1,num2){
    return num1 * num2
}

// 4导出方法四：导出类
export class Person{
    run(){
        console.log('在奔跑');
    }
}

//5.导出方法五: export default(默认导出) 
// const address ='北京市';
// export default{
//     address
// }
// export const address='北京市'
// const address ='北京市'

// export default address

export default function(argument){
    console.log(argument);
}
