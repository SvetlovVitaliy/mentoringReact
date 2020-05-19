const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.config');
const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'source-map',

  devServer: {
    contentBase: path.join(__dirname, 'build'),
    host: 'localhost',
    port: 3001,
    hot: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  watch: true,

  watchOptions: {
    aggregateTimeout: 300,
  },
});