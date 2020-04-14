const HOST = "0.0.0.0";
const PORT = 3200;
const path = require('path');
const portfinder = require("portfinder");

let devWebpackConfig = {
    mode: 'development',
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
                loader: 'babel-loader'
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
    },
  devtool: "#inline-source-map"
};

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = PORT;
  portfinder.getPort((err, port) => {
    if (err) reject(err);
    else {
      devWebpackConfig.devServer.port = port;
      resolve(devWebpackConfig);
    }
  })
});