import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = () => {
        alert('hello fe 49');
    }

    showInfo = (name) => {
        alert(`name ${name}`);
    }

    render() {
        return (
            <div className="container">
                {/* Truyen callback function thông qua thuộc tính */}
                <button onClick={this.handleClick}>Click me</button>
                <br/>
                <button onClick={this.showInfo.bind(this,'Mẫn đẹp trai')}>Show info</button>

                {/* Cách 2: Dùng arrow function */}
                <button onClick={()=>{ 
                        alert('456');
                        //Có thể gọi nhiều hàm thực hiện 
                    }
                    }>Show Messgae</button>
                <br/>
                <button onClick={ () =>{
                    this.showInfo('Mẫn xấu trai');
                }} >Show info</button>
            </div>
        )
    }
}
