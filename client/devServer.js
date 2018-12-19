const Koa = require("koa")
const Router = require("koa-router")
const staticServe = require("koa-static")
const webpack = require("webpack")
const webpackDevMiddleware = require("koa-webpack-dev-middleware")
const webpackHotMiddleware = require("koa-webpack-hot-middleware")
const config = require("../webpack.config.js")
const fs = require("fs")
const WebpackDevServer = require("webpack-dev-server")
const compiler = webpack(config)
const path = require("path")
const devServerOptions = Object.assign({}, config.devServer, {
  stats: {
    colors: true
  }
})
const server = new WebpackDevServer(compiler, devServerOptions)

// 这个是手动配置 webpack-dev-server 
// 也可以通过webpack.config.js 中devServer
server.listen(8080, "127.0.0.1", () => {
  console.log("Starting server on http://localhost:8080")
})
