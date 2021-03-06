/**
 * @file dev.js
 * @since 2.2.0
 */

const path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    output: {
        publicPath: 'localhost:8080/dist/'
    },
    devServer: {
        contentBase: [path.resolve(__dirname, '../', '../')],
        publicPath: 'localhost:8080/dist/',
        watchContentBase: true
    }
};
