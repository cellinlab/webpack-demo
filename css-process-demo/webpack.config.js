const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          (process.env.NODE_ENV === 'development') ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin()
  ]
}