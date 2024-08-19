const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { start } = require('repl');

module.exports = {
    entry: './app.js', // Đảm bảo đường dẫn này chính xác
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/image/png',
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
    devtool: 'source-map',
    experiments: {
        topLevelAwait: true // Đảm bảo Webpack hỗ trợ top-level await
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // Đảm bảo file này tồn tại
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000
    },
    mode: 'development',
};