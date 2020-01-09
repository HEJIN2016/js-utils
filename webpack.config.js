const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd', // 采用通用模块定义
        libraryExport: 'default', // 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范
        library: ['Utils'],
        filename: 'utils.min.js'
    },
    devtool: "#source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: { warnings: false }
            },
            sourceMap: true,
            parallel: true
        })
    ]
};