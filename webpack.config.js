const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  context: __dirname + '/src',

  entry: {
    main: './index.js',
  },

  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: '[name].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: [
          // { loader: MiniCssExtractPlugin.loader },
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file?name=[path][name].[ext]?[hash]',
      },
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: '../public/index.html',
      filename: 'index.html',
      path: '/',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer(),
        ],
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id.css]',
      ignoreOrder: false,
    }),
  ],
}
