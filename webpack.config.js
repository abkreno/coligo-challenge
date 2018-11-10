const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: "./index.js",
  mode: process.env.NODE_ENV || 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public/assets'),
    stats: 'errors-only',
    open: true, // to open the browser tab automatically
    port: 8080,
    compress: true,
  },
  context: path.resolve(__dirname, 'src'),
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new CleanWebpackPlugin(['public']), // cleanup public folder e.g (when files are removed)
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
        }
      }]
    }]
  }
};
