const Koa = require("koa")
const Router = require("koa-router")
const staticServe = require("koa-static")
const webpack = require("webpack")
const webpackDevMiddleware = require("koa-webpack-dev-middleware")
const webpackHotMiddleware = require("koa-webpack-hot-middleware")
const fs = require("fs")
const ReactDOMServer = require("react-dom/server")
const path = require("path")
import React, { Component } from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"
// const config = require("./webpack.config.dev.js")
// const Home = require("./home")
// const compiler = webpack(config)
import Home from "./home"
import reducers from "./reducers"

const staticPath = "../build"
const app = new Koa()
const router = new Router()
const initialState = { isMobile: true }

const store = createStore(reducers)
store.subscribe(() => console.log(store.getState()))
const preloadedState = store.getState()

const html = ReactDOMServer.renderToString(
  <Provider store={store}>
    <Home {...initialState} />
  </Provider>
)

// console.log("====", path.resolve(__dirname, staticPath));
const assertPath = path.resolve(__dirname, staticPath)
app.use(staticServe(assertPath))
// 要读取所有的js文件啦
const injectionJS = fs
  .readdirSync(assertPath)
  .filter(file => /\.js/.test(file))
  .map(i => {
    return `<script type="text/javascript" src="/${i}" charset="utf-8"></script>`
  })
// console.log("injectionJS", injectionJS)

router.get("*", async ctx => {
  // console.log(ctx.request.url);
  if (ctx.request.url.indexOf(".js") === -1) {
    ctx.body = `
      <html>
      <head>
        <title>服务端渲染项目</title>
      </head>
      <body>
      服务端渲染项目
      <div id="root">${html}</div>
      ${injectionJS}
      <script>
          // 警告：关于在 HTML 中嵌入 JSON 的安全问题，请查看以下文档
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            "\\u003c"
          )}
        </script>
      </body>
      </html>
    `
  }
})

app.use(router.routes())

app.listen(3000, () => {
  console.log("server on 3000")
})
