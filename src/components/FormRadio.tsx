import React, { Component, type ChangeEvent } from 'react'

interface StateTypes {
    gender:string;
}

export default class FormRadio extends Component<object,StateTypes> {
    constructor(props:object){
        super(props);

        this.state = {
            gender: ""
        }
    }
  render() {
    const handleSubmit = (event: React.FocusEvent<HTMLFormElement>) =>{
        event.preventDefault();
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>)=> {
          this.setState({
            gender: e.target.value
        })
    }
    return (
      <div>
        <form onSubmit={handleSubmit} style={{display: "flex", flexDirection:"column", backgroundColor:"#fff", color:"#000", padding:"12px"}}>
             <label htmlFor=""> Giới tính: {this.state.gender}</label>
            <div>
            <input type="radio" name='gender'  checked={this.state.gender === "Nam"} onChange={handleChange} value={"Nam"} />
            <label htmlFor="">Nam</label>
            </div>
             <div>
            <input type="radio" name='gender'  checked={this.state.gender === "Nữ"} onChange={handleChange} value={"Nữ"} />
            <label htmlFor="">Nữ</label>
            </div>
             <div>
            <input type="radio" name='gender'  checked={this.state.gender === "Khác"} onChange={handleChange}  value={"Khác"} />
            <label htmlFor="">Khác</label>
            </div>
            <button type='submit' style={{width:"100px"}}>Submit</button>
        </form>
      </div>
    )
  }
}
   