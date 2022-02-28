const path=require('path')
module.exports={
    // 入口
    entry:'./src/main.js',
    // 出口
    output:{
        // 动态获取路径
       path:path.resolve(__dirname,'dist'),
       filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // style-loader负责将央视添加到DOM中
                // css-loader只负责将css文件进行加载
                // 使用多个loader时，是从右向左
                use:['style-loader','css-loader']
            }
        ]
    }
}