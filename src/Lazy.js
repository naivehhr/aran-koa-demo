import React, { Component } from 'react'
import _ from 'lodash'

export default class Lazy extends Component {
  render() {
    console.log('_', _)
    return (
      <div>
        我是一个lazy 区域
      </div>
    )
  }
}
