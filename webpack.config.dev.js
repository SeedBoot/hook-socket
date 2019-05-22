const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.export = merge(baseConfig, {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        port: 4321
    },
    devtool: 'source-map'
});
