import Home from "./home"
import ReactDOM from "react-dom"
import React from "react"
import { hydrate } from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducers from "./reducers"

const preloadedState = window.__PRELOADED_STATE__

// 使用初始 state 创建 Redux store
const store = createStore(reducers, preloadedState)
store.subscribe(() => console.log('subscribe', store.getState())) // 这个写在服务端不管用诶
// ReactDOM.render(<Home isMobile={true} />, document.getElementById("root"))
hydrate(
  <Provider store={store}>
    <Home isMobile={true} />
  </Provider>,
  document.getElementById("root")
)
