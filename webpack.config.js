// module.exports = {
//   entry: [
//     './src/index.js'
//   ],
//   output: {
//     path: __dirname,
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//   devtool: 'source-map',
//   module: {
//     loaders: [{
//       exclude: /node_modules/,
//       loader: 'babel-loader',
//       query: {
//         presets: ['react', 'es2015', 'stage-1']
//       },
//       { test: /\.css$/,  loader: "style-loader!css-loader" },
//       { test: /\.less$/, loader: "style-loader!css-loader!less-loader" }
//     }]
//   },
//   resolve: {
//     modulesDirectories: ['node_modules', 'shared'],
//     extensions: ['', '.js', '.jsx', '.css']
//   },
//   devServer: {
//     historyApiFallback: true,
//     contentBase: './'
//   }
// };
'use strict';
var Webpack = require('webpack');
var path = require('path');
var NpmInstallPlugin = require("npm-install-webpack-plugin");

var mainPath = path.resolve(__dirname, 'public', 'client', 'index.jsx');
// require('babel-polyfill');

const config = {
  entry: [

    //hot style updates

     'webpack/hot/dev-server',
     'webpack-dev-server/client?http://localhost:8080',
    './src/index.jsx'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      { test: /\.css$/,  loader: "style-loader!css-loader" },
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
      { test: /\.gif$/, loader: "url-loader?mimetype=image/png" },
      { test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, loader: "url-loader?mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, loader: "file-loader?name=[name].[ext]" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new NpmInstallPlugin()
  ]
};

module.exports = config;
