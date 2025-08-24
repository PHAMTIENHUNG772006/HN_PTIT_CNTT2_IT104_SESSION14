import React, { Component } from 'react'


interface StateTypes {
    companyName:string;
}
export default class ChangeCompanyName extends Component<object,StateTypes> {

    constructor(props:object){
        super(props)
        this.state = {
            companyName: "Rikkei Academy"
        }
    }
    handleChangeName = () => {
        this.setState({
            companyName : "Rikkei Soft"
        })
    }
  render() {
    return (
      <div>
        <div>Company name: {this.state.companyName}</div>
        <button name='đổi tên' onClick={this.handleChangeName}>Change state</button>
      </div>
    )
  }
}
