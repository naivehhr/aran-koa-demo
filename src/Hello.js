import React from "React";

export default class Hello extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //这里直接判断window，如果是父组件传入的话，通过props判断
      github: window.__INITIAL_DATA__ || []
    };
  }

  componentDidMount() {
    //判断没有数据的话，再去请求数据
    //请求数据的方法也可以抽出去，以让浏览器及服务端能统一调用，避免重复写
    if (this.state.github.length <= 0) {
      fetch("https://api.github.com/repos/jasonboy/wechat-jssdk/branches")
        .then(res => res.json())
        .then(data => {
          this.setState({ github: data });
        });
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.github.map(b => {
            return <li key={b.name}>{b.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
