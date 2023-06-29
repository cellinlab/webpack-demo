const path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/App.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader'
        ]
      }
    ]
  }
};
