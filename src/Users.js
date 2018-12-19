import React, { Component, Suspense, lazy } from "react";
const OtherComponent = lazy(() => import("./Lazy"));
export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "凹凸曼333",
      flag: false
    };
  }

  onClick() {
    this.setState({ flag: true });
  }
  render() {
    return (
      <div>
        Users name: {this.state.name}
        <button onClick={() => this.setState({ name: "小怪兽" })}>改变</button>
        <button onClick={this.onClick.bind(this)}>异步加载</button>
        {this.state.flag && (
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <OtherComponent />
            </Suspense>
          </div>
        )}
      </div>
    );
  }
}
