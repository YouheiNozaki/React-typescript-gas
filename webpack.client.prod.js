const { merge } = require('webpack-merge');
const common = require('./webpack.client.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
});
