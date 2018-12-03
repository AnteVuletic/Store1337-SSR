const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  target: 'node',
  externals: [webpackNodeExternals({
      whitelist: ['tachyons','react-masonry-css']
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
          loader: 'babel-loader'
        }
      }
    ]
  }
};
