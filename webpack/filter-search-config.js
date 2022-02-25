const path = require("path");

module.exports = {
  entry: "/src/index.js",
  output: {
    path: path.resolve(__dirname, "../drink_now/search/static/search/bundle.js"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      }
    ]
  }
};
