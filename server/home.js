import React, { Component } from "react"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "lala"
    }
  }
  handleClick() {
    console.log('handleClick')
    this.setState({ name: "凹凸曼" })
  }
  render() {
    const { isMobile } = this.props
    console.log("isMobile", isMobile)
    return (
      <div>
        <div>AppSSR page: {this.state.name}</div>
        <div>aran.hu {isMobile ? "isMobile" : "noMobile"}</div>
        <button onClick={this.handleClick.bind(this)}> 点我 </button>
      </div>
    )
  }
}
