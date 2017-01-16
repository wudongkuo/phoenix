var webpack=require('webpack')
module.exports={
    entry:[
        "webpack/hot/dev-server",
        "./src/app.js"
    ],
    output:{
        path:"./build",
        publicPath:"http://localhost:8080/assets/",
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {test:/\.js?$/,loaders:['react-hot','babel'],exclude:/node_modules/},
            {test:/\.js$/,exclude:/node_modules/,
                loader:'babel-loader'
            },
            {test:/\.css$/,loader:"style!css"},
            {test:/\.less$/,loader:'style-loader!css-loader!less-loader'}
        ]
    },
    resolve:{
        extensions:['','.js','.json']
    },
    plugins:[
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}