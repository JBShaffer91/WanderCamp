const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new Dotenv(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 8080,
    open: true,
  },
  resolve: {
    fallback: {
      fs: false,
      stream: false,
      zlib: false,
      util: false,
      path: false,
      crypto: require.resolve('crypto-browserify'),
    },
  },
  externals: {
    axios: 'axios',
    'form-data': 'form-data',
    fs: 'fs',
    os: 'os',
    path: 'path',
    stream: 'stream',
    url: 'url',
    util: 'util',
    'node-fetch': 'fetch',
  },
};
