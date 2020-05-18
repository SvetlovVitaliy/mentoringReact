'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DEV = 'development';
const PROD = 'production';
const NODE_ENV = process.env.NODE_ENV || DEV;

module.exports = {
  context: __dirname + '/src',

  entry: {
    main: './index.js',
  },

  output: {
    path: __dirname + '/build',
    filename: '[name].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          //style-loader
          { loader: 'style-loader' },
          // css-loader
          { loader: 'css-loader' },
          // sass-loader
          { loader: 'sass-loader' },
        ],
      }
    ]
  },


  devtool: NODE_ENV === DEV ? 'source-map' : 'null',

  // resolve: {
  //   moduleDirectories: ['node_modules'],
  //   extensions: ['', '.js']
  // },

  // resolveLoader: {
  //   moduleDirectories: ['node_modules'],
  //   moduleTemplates: ['*-loader', '*'],
  //   extensions: ['', '.js']
  // },

  plugins: [
    new webpack.DefinePlugin({ NODE_ENV: JSON.stringify(NODE_ENV) }),
    new HtmlWebpackPlugin({
      template: '../public/index.html',
    }),
  ],

  devServer: {
    contentBase: path.join(__dirname, 'build'),
  },

  // watch: NODE_ENV === DEV,

  watchOptions: {
    aggregateTimeout: 300,
  }
}

// if (NODE_ENV === PROD) {
//   module.exports.plugins.push(
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: false,
//         // drop_console: true,
//         // unsafe: true
//       }
//     })
//   );
// }
