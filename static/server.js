const Koa = require("Koa");
const Router = require("koa-router");
const staticServe = require("koa-static")
const path = require("path")

const app = new Koa();
const router = new Router();

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });
const staticPath = "/";
const staticPath1 = "../img/";


console.log('===', path.resolve(__dirname, staticPath))
app.use(staticServe(path.join(__dirname, staticPath)));

router.get("*", async ctx => {
  console.log(ctx.request.url);
  ctx.body = "htmlFile";
});

app.use(router.routes());
app.listen(3000, () => {
  console.log("server on 3000");
});
