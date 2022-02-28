const path = require('path')
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      // 哪些文件自动引入，使用绝对路径
      // 需要是path.join来拼接完整路径
      patterns: [
        path.join(__dirname, './src/assets/styles/variables.less'),
        path.join(__dirname, './src/assets/styles/mixins.less')
      ]
    }
  }
  // http://zhoushugang.gitee.io/erabbit-client-pc-document/api.html
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://zhoushugang.gitee.io/erabbit-client-pc-document/api.html', // 对应自己的接口
  //       changeOrigin: true,
  //       ws: true,
  //       pathRewrite: {
  //         '/api': ''
  //       }
  //     }
  //   }
  // }
}
