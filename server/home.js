import React, { Component } from "react"
import { connect } from "react-redux"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "lala"
    }
  }
  handleClick() {
    this.props.increase()
    setTimeout(() => {
      fetch("/api").then(this.setState({ name: "小怪兽" }))
    }, 2000)
    this.setState({ name: "凹凸曼" })
  }
  render() {
    const {
      isMobile,
      state: { count }
    } = this.props
    return (
      <div>
        <div>AppSSR page: {this.state.name}</div>
        <div>aran.hu {isMobile ? "isMobile" : "noMobile"}</div>
        <div>Coutn: {count}</div>
        <button onClick={this.handleClick.bind(this)}> 点我 </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increase: () =>
      dispatch({
        type: "INCREASE"
      })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
