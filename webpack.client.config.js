'use strict';

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/*    Google Apps Script Config
================================== */

const appsscriptConfig = {
  entry: './appsscript.json',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: './appsscript.json' }],
    }),
  ],
};

const config = {
  entry: './src/client/App.tsx',
  output: {
    path: resolve('dist'),
    filename: 'App.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      inlineSource: '.(js|css|tsx)$',
      template: './public/index.html',
    }),
    new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
  ],
  externals: [
    {
      react: 'React',
      'react-dom': 'ReactDOM',
      '@material-ui/core': 'MaterialUI',
      'react-router-dom': 'ReactRouterDOM',
    },
  ],
};

module.exports = [config, appsscriptConfig];
