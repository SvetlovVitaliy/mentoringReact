const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const DEV = 'development';
const NODE_ENV = process.env.NODE_ENV || DEV;

module.exports = {
  mode: NODE_ENV,

  context: __dirname + '/src',

  entry: {
    main: './index.tsx',
  },

  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: '[name].bundle.js',
  },

  devtool: NODE_ENV === DEV ? 'source-map' : 'null',

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
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
    }),
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
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
  ],

  devServer: {
    contentBase: path.join(__dirname, 'build'),
    host: 'localhost',
    port: 3001,
    hot: true,
  },

  watch: NODE_ENV === DEV,

  watchOptions: {
    aggregateTimeout: 300,
  },

  optimization: {
    minimize: NODE_ENV !== DEV,
  },
}
