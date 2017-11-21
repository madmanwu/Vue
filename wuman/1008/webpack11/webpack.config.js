let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build')/* ,
        publicPath: path.join(__dirname, 'assest/') */
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss|sass$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.jpg|png|jpeg|gif$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: '1024'
                        }
                    }
                ]
            },
            {
                test: /\.otf|eot|svg|ttf|woff$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: '1024'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'),
            inject: 'body'
        })
    ],
    devServer: {
        port: 3000
    }
};
