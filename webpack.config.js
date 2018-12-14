const path = require("path")
const webpack = require("webpack")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: [
    "webpack-hot-middleware/client",
    path.join(__dirname, "./src/app.js")
  ],
  output: {
    path: path.join(__dirname, "dist"),
    // publicPath: "/dist/",
    filename: "[name].js",
    chunkFilename: "[name].[id].js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      //根据index.ejs 生成index.html文件
      title: "SSR喽",
      inject: true,
      filename: "index.html",
      template: path.join(__dirname, "./index.ejs")
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        include: path.join(__dirname, "src"),
        exclude: /node_modules/
      }
    ]
  }
}
