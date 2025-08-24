import React, { Component } from 'react'


interface StateTypes {
    slogan:string;
}
export default class PrevenRender extends Component<object,StateTypes> {
    constructor(props:object){
        super(props)
        this.state = {
            slogan: "Rikkei Academy"
        }
    }
    handleChangeName = () => {
        this.setState({
            slogan : "Rikkei Soft"
        })
    }
    shouldComponentUpdate(): boolean {
        console.log(this.state.slogan);  
        return false;
    }
  render() {
    return (
      <div>
        <div>Slogan : {this.state.slogan}</div>
        <button name='đổi tên' onClick={this.handleChangeName}>Change state</button>
      </div>
    )
  }
}
