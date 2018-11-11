const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production',
    target: 'node',
    externals: [webpackNodeExternals({
        whitelist: ['tachyons']
    })],
    entry: './src/server/index.js',
    output: {
        path: path.join(__dirname,'/dist'),
        filename: 'server.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                }
            },{
                loader: 'css-loader/locals',
                test: /\.css$/,
                options: {
                    modules: true,
                    localIdentName: '[local]',
                }
            }
        ]
    }
};
