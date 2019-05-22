const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'static/js/[name].[chunkhash:8].js',
        chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                corejs: '3',
                                targets: [
                                    'last 2 versions',
                                    'not dead',
                                    'not < 2%',
                                ],
                                useBuiltIns: 'usage',
                            }
                        ],
                        '@babel/preset-react'
                    ],
                    plugins: [
                        // 'react-hot-loader/babel',
                        '@babel/plugin-proposal-class-properties',
                        '@babel/plugin-proposal-export-default-from',
                    ]
                }
            },
            {
                test: /\.(jpg|png|gif|eot|otf|svg|ttf|woff|woff2)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    name: 'static/media/[name].[hash:8].[ext]',
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
