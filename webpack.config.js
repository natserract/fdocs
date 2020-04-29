var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['./src/js/index.js', './src/scss/future.scss'],
  mode: 'development',
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: 'js/future.js',
    publicPath: "/",
  },
  devServer: {
    publicPath: "/",
    compress: true,
    port: 9000
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      { 
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader', 'postcss-loader'],
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ 
      filename: 'css/future.css',
      allChunks: true,
    }),
    new CopyPlugin([
      { from: 'src/scss', to: 'scss' },
    ]),
  ],
};