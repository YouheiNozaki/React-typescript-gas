'use strict';

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// appsscript.jsonをコピーする設定
const appsscriptConfig = {
  entry: './appsscript.json',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: './appsscript.json' }],
    }),
  ],
};

// serverにあるdoGet関数をコピーする設定
const doGetConfig = {
  entry: './src/gas/index.ts',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: './src/gas/index.ts', to: './doGet.ts' }],
    }),
  ],
};

// Clientのコードをビルドする設定
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

module.exports = [config, appsscriptConfig, doGetConfig];
