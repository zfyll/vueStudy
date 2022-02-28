interface Point { //首字母大写
    x: number,
    y: number
}

function printCoord(pt: Point) {

}
printCoord({
    x: 100,
    y: 200
})

// 扩展接口
// interface Animal {
//     name: string
// }
// interface Bear extends Animal {
//     honey: boolean
// }
// const bear: Bear = {
//     name: 'winie',
//     honey: true
// }

type Animal = {
    name: string
}
type Bear =Animal & {
    honey: boolean
}
const bear: Bear = {
    name: 'winnie',
    honey: true
}

// 向原有类型添加字段
interface MyWindow {
    count: number
}
interface MyWindow {
    title: string
}
const w: MyWindow = {
    title: 'hello ts',
    count: 100
}