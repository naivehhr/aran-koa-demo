import React, { Component } from 'react'

export default class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '凹凸曼'
    }
  }
  render() {
    return (
      <div>
        Users name: {this.state.name}
        <button onClick={()=> this.setState({name: '小怪兽'})}>改变</button>
      </div>
    )
  }
}
