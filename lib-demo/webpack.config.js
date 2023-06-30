const path = require('path');

const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'libDemo',
      type: 'umd',
    }
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  externals: [
    // lodash: {
    //   commonjs: 'lodash',
    //   commonjs2: 'lodash',
    //   amd: 'lodash',
    //   root: '_',
    // }
    nodeExternals()
  ],
};
