// webpack.config.js
var path = require('path');
var webpack = require('webpack');

if(process.env.DEV){
  
  var entry = [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app-client.js'
  ];

} else {

  var entry = './app-client.js';

}

module.exports = {
  devtool: 'eval',
  entry: entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot','babel'],
      exclude: /node_modules/
    }]
  }
};