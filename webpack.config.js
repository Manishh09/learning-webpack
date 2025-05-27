// Webpack configuration file for a JS project
const path = require("path");

module.exports = {
  // entry file
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
    // add more entries for code splitting, ..etc
  },
  // output path
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  mode: 'development' // production
};



 
