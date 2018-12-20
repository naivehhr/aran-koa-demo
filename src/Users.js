import React, { Component, Suspense, lazy } from "react"
import Loadable from "react-loadable"

// 尝试 react-loadable 的异步加载方案
const LoadableComponent = Loadable({
  loader: () => import("./Lazy"),
  loading() {
    return <div>加载中...</div>
  }
})

// const OtherComponent = lazy(() => import("./Lazy"))
export default class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "凹凸曼333",
      flag: false
    }
  }

  onClick() {
    this.setState({ flag: !this.state.flag })
  }
  render() {
    return (
      <div>
        Users name: {this.state.name}
        <button onClick={() => this.setState({ name: "小怪兽" })}>改变</button>
        <button onClick={this.onClick.bind(this)}>异步加载</button>
        {this.state.flag && <LoadableComponent />}
      </div>
    )
  }
}
