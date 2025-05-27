// Webpack configuration file for a JS project
const path = require("path");
const loader = require("sass-loader");

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
  }
};



 
