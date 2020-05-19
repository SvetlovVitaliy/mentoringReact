const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.config');
const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',

  plugins: [
    new CleanWebpackPlugin(),
  ],
  
  optimization: {
    minimize: true,
  },
});