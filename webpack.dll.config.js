const webpack = require("webpack")
const path = require("path")


// 这个东西咋玩啊
module.exports = {
  entry: {
    // 定义程序中打包公共文件的入口文件vendor.js
    vendor: ["react", "react-dom"] //[path.resolve(src, 'js', 'vendor.js')],
  },

  plugins: [
    new webpack.DllPlugin({
      // manifest缓存文件的请求上下文（默认为webpack执行环境上下文）
      context: process.cwd(),

      // manifest.json文件的输出位置
      path: path.resolve(__dirname, "dist/vendor-manifest.json"),

      // 定义打包的公共vendor文件对外暴露的函数名
      name: "[name]_[hash]"
    })
  ]
}
