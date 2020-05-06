var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: './projects/salt/api/library/app/components/button/compile.ts',
    index2: './projects/salt/api/library/app/components/slider/compile.ts',
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, "./tamp"),
    filename: '[name].bundle.js',
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      { 
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader', 'postcss-loader'],
        })
      },
      { 
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }, 
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
    ]
  },
  plugins: [
    // new ExtractTextPlugin({ 
    //   filename: 'css/salt.min.css',
    //   allChunks: true,
    // }),
    // new CopyPlugin([
    //   { from: 'project/salt/lib/scss', to: 'scss' },
    // ]),
  ],
};