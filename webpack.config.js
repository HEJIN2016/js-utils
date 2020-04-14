const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");


module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        // libraryTarget: 'umd', // 采用通用模块定义
        // libraryExport: 'default', // 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范
        // library: ['Utils'],
        filename: 'utils.min.js',
        // globalObject: 'this', // 定义全局变量,兼容node和浏览器运行，避免出现"window is not defined"的情况

        library: 'Utils',
        globalObject: 'this',
        libraryExport: 'default',
        libraryTarget: 'umd'
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
            sourceMap: true,
            uglifyOptions: {
                warnings: false,
                compress: {
                    drop_console: true // 删除console语句
                },
                output: {
                    // comments: false,
                    beautify: false
                }
            },
            parallel: true
        })

    ]
};