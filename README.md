# aran-koa-demo

问题：
server端渲染后构建的js怎么替换呢？
服务端渲染的时机是怎样的？
按需加载的机制和效果？
不能热更新了。。。

* 搭建ReactDevServer
  * 主要是koa的熟悉，和server端的基本配置
  * koa-router的使用

* 搭建服务端渲染
  * redux的使用
  * 

* 搭建API Mock Server

* 按需加载

  * [x] Loader  尝试了两种
  * webpack 分包
  * 要理解原理
  * SSR不需要异步加载

* 可行性服务
  * helmet 
  * css img....
  * fetch balabala

* 参考heifetz结构更清晰

* 加快构建速度

  * webpack.DllPlugin https://www.cnblogs.com/lvdabao/p/5944420.html
  * 多入口的作用

* Make 的使用

* 终极目标 大型CMS搭建



### 备注

* 尝试了两种WebpackDevServer配置，还是使用webpack-dev-server的好