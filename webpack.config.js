// Webpack configuration file for a JS project
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // entry file
  mode: 'development', // production
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
    // add more entries for code splitting, ..etc
  },
  // output path
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  // handle modules e.g styles bundling using loaders
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader','css-loader', 'sass-loader']
      }
    ]
  },

  // handle plugins
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Learning Webpack',
        filename: 'index.html',
        template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
};



 
