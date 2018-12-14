const nodeExternals = require("webpack-node-externals");
const path = require("path");
module.exports = {
  target: "node",
  entry: [path.join(__dirname, "./src/appServer.js")],
  output: {
    path: path.join(__dirname, "build/node"),
    filename: "ssr.js",
    libraryExport: "default",
    libraryTarget: "commonjs2"
  },
  //避免把node_modules里的库都打包进去，此ssr js会直接运行在node端，
  //所以不需要打包进最终的文件中，运行时会自动从node_modules里加载
  externals: [nodeExternals()],
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
};
