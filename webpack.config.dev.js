const path = require("path")
const webpack = require("webpack")
const HTMLWebpackPlugin = require("html-webpack-plugin")

// 仅为client打包所用了，结合下面的webpack.config.js
module.exports = {
  // mode: "development", // 这个是干啥的
  devtool: "cheap-module-eval-source-map",
  entry: {
    app: path.join(__dirname, "./src/app.js")
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].[hash:8].js",
    chunkFilename: "[name].[hash:8].chunk.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      //根据index.ejs 生成index.html文件
      title: "react page",
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
