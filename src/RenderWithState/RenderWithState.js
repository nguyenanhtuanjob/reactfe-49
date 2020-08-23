import React, { Component } from 'react'

export default class RenderWithState extends Component {

    // Quản lý những giá trị thay dổi trên giao diện
    state ={
        login:false,
    }


    //Thuộc tính
    // login = true;
    username = 'Man';
    
    renderLogin = () =>{
        if(this.state.login){
            return <p>
                Hello {this.username}
            </p>
        }
        return <div>
            <button className="btn btn-success" onClick ={() =>{
                this.handleLogin();
            }} >Đăng nhập</button>
            </div> 
    }
    handleLogin = () => {
        // this.state.login = true; //không được gọi hàm state trực tiếp
        //Phương thức setState =>
        // Làm thay đổi giá trị state
        // Gọi lại hàm render chạy lại
        // setState là phương thức bất đồng bộ

        let newState = {login: true};
        this.setState(newState,()=>{
            console.log(this.state.login);
        });
        
    }
    render() {
        return (
            <div className="container">
                {/* {this.login ? <p>Hello {this.username}</p> : <div><button className="btn btn-success">Đăng nhập</button></div>} */}
                {this.renderLogin()}
            </div>
        )
    }
}
