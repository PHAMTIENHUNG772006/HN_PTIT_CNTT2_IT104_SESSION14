import React, { Component } from 'react'


interface StateTypes {
    userName:string;
}
export default class Exersice01 extends Component<object,StateTypes> {
    constructor(props:object){
        super(props)
        this.state = {
            userName : "Phạm Tiến Hưng"
        }
    }
  render() {
    return (
      <div>{this.state.userName}</div>
    )
  }
}
