'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './index.js',

  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'build')
  },

  watch: true
}
