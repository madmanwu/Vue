let path = require('path');
module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build')
    },
    module: {
        rules: [
            {
                // 配置scss
                test: /\.scss$/,
                use: ['style-loader', 'css-loader']
            },
            {
                // 配置css
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                // 配置less
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                // 配置scss
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                // 配置jpg
                test: /\.jpg$/,
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
                // 配置字体
                test: /\.ttf$/,
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
    }

};
