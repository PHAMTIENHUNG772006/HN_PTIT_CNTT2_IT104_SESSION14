import React, { Component } from 'react'

interface StateTypes {
    productName:string;
    code:string;
    price:number;
    quantity:number;
}

interface Product {
    productName:string;
    code:string;
    price:number;
    quantity:number;
}

export default class FormSubmit extends Component<object,StateTypes> {
    constructor(props:object){
        super(props);
        this.state = {
         productName : "",
         code: "",
         price:0,
         quantity:0
        }
    }
  render() {
    const handleSubit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submit form");
        
        const valueProduct:  Product = {
          productName: this.state.productName,
          code: this.state.code,
          price: this.state.price,
          quantity: this.state.quantity,
        }


        console.log(valueProduct);
    }
    return (
      <div>
        <form onSubmit={handleSubit} action="" style={{display: "flex", flexDirection:"column", backgroundColor:"#fff", color:"#000", padding:"12px"}}>
            <h2>Thêm mới sản phẩm</h2>
          <div style={{display: "flex", flexDirection:"column"}}>
            <label htmlFor="">Mã sản phẩm</label>
            <input onChange={(e) => this.setState({code: e.target.value})} value={this.state.code}  type="text" />
          </div>
          <br />
          <div style={{display: "flex", flexDirection:"column"}}>
            <label htmlFor="">Ten sản phẩm</label>
            <input onChange={(e) => this.setState({productName: e.target.value})} value={this.state.productName} type="text"  />
          </div>
          <br />
          <div style={{display: "flex", flexDirection:"column"}}>
            <label htmlFor="">Giá</label>
            <input onChange={(e) => this.setState({price: Number(e.target.value)})} value={this.state.price} type="text"  />
          </div>
          <br />
          <div style={{display: "flex", flexDirection:"column"}}>
            <label htmlFor="">Số lượng sản phẩm</label>
            <input onChange={(e) => this.setState({quantity: Number(e.target.value)})} value={this.state.quantity} type="text"/>
          </div>
          <br />
          <button type="submit">Đăng kí</button>
        </form>
      </div>
    );
  }
}
