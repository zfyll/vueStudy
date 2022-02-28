module.exports = {
  plugins: {
    autoprefixer: {
      browsers: [
        'ie >= 8',
        'Firefox >= 3.5',
        'Chrome >= 35',
        'opera >= 11.5'
      ]
    },
    'postcss-pxtorem': {
      rootValue: 192, // 设置root 元素的字体大小，值为移动端页面宽度/10
      propList: ['*'], // 可以从px更改到rem的属性
      selectorBlackList: ['van-', '.my-'], // 过滤掉van-开头的元素选择器和.my-开头的类选择器
      exclude: /node_modules/i// 排除node_modules目录及目录下文件
    }
  }
}
