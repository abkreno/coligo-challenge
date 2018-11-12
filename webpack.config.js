const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({
  filename: './style.css',
});

module.exports = {
  entry: './index.js',
  mode: process.env.NODE_ENV || 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public/assets'),
    stats: 'errors-only',
    open: true, // to open the browser tab automatically
    port: 8080,
    compress: true,
    historyApiFallback: true,
  },
  context: path.resolve(__dirname, 'src'),
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new CleanWebpackPlugin(['public']), // cleanup public folder e.g (when files are removed)
    extractPlugin,
  ],
  module: {
    rules: [{
      test: /\.(jpg|png|gif|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './assets/',
          },
        }],
    }, {
      test: /\.(css|scss)$/,
      use: extractPlugin.extract({
        use: ['css-loader', 'sass-loader', 'postcss-loader'],
        fallback: 'style-loader',
      }),
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }],
  },
};
