function greet (name: string) {
    console.log("hello," + name.toUpperCase() + ' !! ');
    
}
// greet(3)  "类型“number”的参数不能赋给类型“string”的参数。"
greet('fe')

// function getFavoriteNumber(): number {
//     return 26
// }

function getFavoriteNumber() {
    return 26
}

const names = ['小千', '晓峰', '小圆']
names.forEach(function(s) {
    console.log(s.toUpperCase());
    
})
names.forEach((s) => {
    console.log(s.toUpperCase());
    
})