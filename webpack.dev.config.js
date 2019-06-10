const HOST = "0.0.0.0";
const PORT = 3200;
const path = require('path');

module.exports = {
    entry: {
        app: path.join(__dirname, 'dev', 'index.js')
    },
    output: {
        path: path.join(__dirname, 'dev'),
        filename: 'bundle.js'
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
    devServer: {
        contentBase: path.join(__dirname, "dev"),
        clientLogLevel: 'warning',
        hot: true,
        compress: true,
        host: HOST,
        port: PORT,
        open: false
    }
}