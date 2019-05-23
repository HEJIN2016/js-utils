const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

const DEV = process.env.NODE_ENV;

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd', // 采用通用模块定义
        libraryExport: 'default', // 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范
        library: ['utils'],
        filename: DEV?'utils.js':'utils.min.js'
        // globalObject: 'this' // 兼容node和浏览器运行，避免window is not undefined情况
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }]
            }
        ]
    },
    plugins: !DEV?[
        new webpack.optimize.UglifyJsPlugin()
    ]:[]
};