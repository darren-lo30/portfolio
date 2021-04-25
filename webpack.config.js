/* eslint-disable global-require */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInjector = require('html-webpack-injector');

module.exports = {
  mode: 'development',
  entry: {
    preload_head: './src/loading-animation.js',
    afterload: './src/index.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    environment: {
      arrowFunction: false,
      destructuring: false,
      dynamicImport: false,
      module: false,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      scriptLoading: 'blocking',
      chunks: ['preload_head', 'afterload'],
      chunksConfig: {
        defer: ['afterload'],
      },
    }),
    new HtmlWebpackInjector(),
  ],
  module: {
    rules: [
      // JS loader
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              require('@babel/plugin-transform-arrow-functions'),
            ],
          },
        },
      },
      // CSS loader with auto prefixing
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      // SASS and SCSS loader with auto prefixing
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      // Font and image loader
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf)$/,
        type: 'asset/resource',
      },
      // Html Loader
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
