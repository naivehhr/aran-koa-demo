const Koa = require("koa");
const Router = require("koa-router");
const staticServe = require("koa-static");
const webpack = require("webpack");
const webpackDevMiddleware = require("koa-webpack-dev-middleware");
const webpackHotMiddleware = require("koa-webpack-hot-middleware");
const fs = require("fs");
const ReactDOMServer = require("react-dom/server");
const path = require("path");
import React, { Component } from "react";
// const config = require("./webpack.config.dev.js")
// const Home = require("./home")
import Home from "./home";
// const compiler = webpack(config)
const staticPath = "../build";
const app = new Koa();
const router = new Router();
const initialState = { isMobile: true };
const html = ReactDOMServer.renderToString(<Home {...initialState} />);

console.log("====", path.resolve(__dirname, staticPath));
app.use(staticServe(path.resolve(__dirname, staticPath)));

router.get("*", async ctx => {
  console.log(ctx.request.url);
  if (ctx.request.url.indexOf(".js") === -1) {
    ctx.body = `
      <html>
      <head>
        <title>服务端渲染项目</title>
      </head>
      <body>
      服务端渲染项目
      <div id="root">${html}</div>
      <script type="text/javascript" src="/ssr111.js" charset="utf-8"></script>
      </body>
      </html>
    `;
  }
});

app.use(router.routes());

app.listen(3000, () => {
  console.log("server on 3000");
});
