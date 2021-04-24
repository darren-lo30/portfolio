/* eslint-disable global-require */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
  },
  output: {
    filename: 'main.js',
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
      template: '/src/template.html',
    }),
  ],
  module: {
    rules: [
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
      // Font loader
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
