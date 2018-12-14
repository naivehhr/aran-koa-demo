const Koa = require("koa");
const Router = require("koa-router");
const staticServe = require("koa-static");
const webpack = require("webpack");
const webpackDevMiddleware = require("koa-webpack-dev-middleware");
const webpackHotMiddleware = require("koa-webpack-hot-middleware");
const config = require("./webpack.config.dev.js");
const fs = require("fs");

const compiler = webpack(config);
const path = require("path");
// const staticPath = "./dist"

// 这个静态文件呀， 路径
// https://github.com/chenshenhai/koa2-note/tree/master/demo/static-use-middleware/static?1544775482639
// const staticPath = "./dist"
const staticPath = "/";

const app = new Koa();
const router = new Router();

app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);
app.use(webpackHotMiddleware(compiler));

// // logger
// app.use(async (ctx, next) => {
//   console.log("进入logger")
//   await next()
//   const rt = ctx.response.get("X-Response-Time")
//   console.log("离开logger")
//   console.log(`${ctx.method} ${ctx.url} - ${rt}`)
// })

// // x-response-time
// app.use(async (ctx, next) => {
//   const start = Date.now()
//   console.log("进入x-response-time")
//   await next()
//   const ms = Date.now() - start
//   ctx.set("X-Response-Time", `${ms}ms`)
//   console.log("离开x-response-time")
// })

// response
// app.use(async ctx => {
//   ctx.body = "Hello World"
// })

router.get("*", async ctx => {
  console.log(ctx.request.url);
  if (ctx.request.url.indexOf(".js") === -1) {
    const htmlFile = await new Promise(function(resolve, reject) {
      fs.readFile("./dist/index.html", (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
    ctx.type = "html";
    ctx.body = htmlFile;
  }
});

app.use(router.routes());

app.use(staticServe(path.join(__dirname, staticPath)));

app.listen(3000, () => {
  console.log("server on 3000");
});
