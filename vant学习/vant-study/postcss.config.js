module.exports = {
  plugins: {
    "autoprefixer":{
      "browsers":[
        //移动端
        'Android >= 4.0',
        'iOS >= 8'
        // pc端
        // "ie >=8",//兼容ie7以上的浏览器
        // "Firefox >= 3.5",//兼容火狐3.5以上的浏览器
        // "chrome >= 35",//兼容谷歌35以上的浏览器
        // "opera >= 11.5"//兼容欧朋版本号11.5以上的浏览器
      ]
    },
    'postcss-pxtorem': {
      rootValue: 37.5, // 设置root 元素的字体大小，值为移动端页面宽度/10
      propList: ['*'], // 可以从px更改到rem的属性
      selectorBlackList: ['van-', '.my-'], // 过滤掉van-开头的元素选择器和.my-开头的类选择器
      exclude: /node_modules/i// 排除node_modules目录及目录下文件
    }
  }
}
