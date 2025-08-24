import React, { Component } from 'react'

interface StateTypes {
    email:string;
    password:string;
}
interface Account {
    email:string;
    password:string;
}


export default class FormSign extends Component<object,StateTypes> {

     constructor(props:object){
        super(props)
        this.state = {
             email:"",
             password:"",
        }
    }
  render() {

     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if( !this.state.password || !this.state.email){
                alert("Vui lòng nhập đủ thông tin")
                return;
            }
    
            const account: Account = {
                 email: this.state.email,
                 password: this.state.password,
            }
    
             this.setState({
                 email: "",
                 password: "",
            })
    
            alert("Đăng nhập khoản thành công");
            localStorage.setItem("account",JSON.stringify(account));
        }
    
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const {name , value} = event.target;
    
            this.setState({
                [name]: value
            } as Pick<StateTypes, keyof StateTypes>)
        }
    
    return (
       <div style={{
          margin: "0",
          height: "100vh",              
          display: "flex",
          justifyContent: "center",    
          alignItems: "center",          
          background: "#f0f0f0"     
      }}>
        <form onSubmit={handleSubmit} style={{display: "flex", flexDirection:"column", backgroundColor:"#fff", color:"#000", padding:"12px", width:"200px"}}>
            <h2>Form Đăng nhập</h2>
             <div style={{display: "flex", flexDirection:"column",borderRadius:"10px"}} >
                <label htmlFor="">Email</label>
                <input type="text" name='email' value={this.state.email} onChange={handleChange} />
            </div>
             <div style={{display: "flex", flexDirection:"column",borderRadius:"10px"}}>
                <label htmlFor="">Mật khẩu</label>
                <input type="text" name='password' value={this.state.password} onChange={handleChange} />
            </div>
            <br />
            <button type='submit' style={{backgroundColor:"blue",color:"#fff"}}>Đăng kí</button>
        </form>
      </div>
    )
  }
}
