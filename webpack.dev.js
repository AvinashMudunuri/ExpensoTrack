const { merge } = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    port: 8000,
  },
  devtool: 'inline-source-map',
});
