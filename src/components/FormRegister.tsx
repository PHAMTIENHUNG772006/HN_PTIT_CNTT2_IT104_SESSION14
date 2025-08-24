import React, { Component, createRef } from 'react'

interface StateTypes {
    userName:string;
    email:string;
    password:string;
    phone:string;
}
interface Account {
    userName:string;
    email:string;
    password:string;
    phone:string;
}

export default class FormRegister extends Component<object,StateTypes> {
    userNameRef = createRef<HTMLInputElement>();
    constructor(props:object){
        super(props)
        this.state = {
             userName:"",
             email:"",
             password:"",
             phone:"",
        }
    }

    componentDidMount(): void {
        this.userNameRef.current?.focus();
    }
  render() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!this.state.userName || !this.state.password || !this.state.email || !this.state.phone){
            alert("Vui lòng nhập đủ thông tin")
            return;
        }

        const account: Account = {
             userName: this.state.userName,
             email: this.state.email,
             password: this.state.password,
             phone: this.state.phone,
        }

         this.setState({
             userName: "",
             email: "",
             password: "",
             phone: "",
        })

        alert("Đăng kí thông tin tài khoản thành công");
        console.log(account);
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
            <h2>Form đăng kí</h2>
            <div style={{display: "flex", flexDirection:"column"}}>
                <label htmlFor="">Tên sinh viên</label>
                <input type="text" ref={this.userNameRef} name='userName' value={this.state.userName} onChange={handleChange} />
            </div>
             <div style={{display: "flex", flexDirection:"column",borderRadius:"10px"}} >
                <label htmlFor="">Email</label>
                <input type="text" name='email' value={this.state.email} onChange={handleChange} />
            </div>
             <div style={{display: "flex", flexDirection:"column",borderRadius:"10px"}}>
                <label htmlFor="">Mật khẩu</label>
                <input type="text" name='password' value={this.state.password} onChange={handleChange} />
            </div>
             <div style={{display: "flex", flexDirection:"column",borderRadius:"10px"}}>
                <label htmlFor="">Số điện thoại</label>
                <input type="text" name='phone' value={this.state.phone} onChange={handleChange} />
            </div>
            <br />
            <button type='submit' style={{backgroundColor:"blue",color:"#fff"}}>Đăng kí</button>
        </form>
      </div>
    )
  }
}
