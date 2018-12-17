// const nodeExternals = require("webpack-node-externals")
const path = require("path")
console.log(path.join(__dirname, "server"))
module.exports = {
  target: "node",
  entry: [path.join(__dirname, "./server/app.js")],
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/static/",
    filename: "ssr.js",
    chunkFilename: "[name].[hash:8].chunk.js"
  },
  //避免把node_modules里的库都打包进去，此ssr js会直接运行在node端，
  //所以不需要打包进最终的文件中，运行时会自动从node_modules里加载
  // externals: [nodeExternals()], // 这个又是啥
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        include: path.join(__dirname, "server"),
        exclude: /node_modules/
      }
    ]
  }
}
