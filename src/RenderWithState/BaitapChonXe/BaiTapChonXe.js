import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state ={
        imgCar:'./img/CarBasic/products/black-car.jpg'
    }

    handleChangeColorCar = (imgColor) => {
        //Lấy img được click gán vào state thông qua phương thức setState
        this.setState({
            imgCar: `./img/CarBasic/products/${imgColor}-car.jpg`
        })
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <img style={{width:'100%'}} src={this.state.imgCar} />
                    </div>
                    <div className ="col-4">
                            <div class="card text-left">
                                <div className="card-header">
                                    Exterior color
                                </div>
                                <div class="card-body">
                                    <div onClick={()=>{
                                        this.handleChangeColorCar('black')
                                    }} className="row p-2 mt-2" style={{border:'1px solid #EEE',cursor:'pointer'}}>
                                        <div className="col-4 image">
                                            <img style={{width:'100%',display:'block'}} src="./img/CarBasic/icons/icon-black.jpg"/>
                                        </div>
                                        <div className="col-8">
                                            <h5>Crystal Black </h5>
                                            <p class="card-text">Pearl</p>
                                        </div>
                                    </div>

                                    <div onClick={()=>{
                                        this.handleChangeColorCar('steel')
                                    }} className="row p-2 mt-2" style={{border:'1px solid #EEE',cursor:'pointer'}}>
                                        <div className="col-4 image">
                                            <img style={{width:'100%',display:'block'}} src="./img/CarBasic/icons/icon-steel.jpg"/>
                                        </div>
                                        <div className="col-8">
                                            <h5>Modern </h5>
                                            <p class="card-text">Pearl</p>
                                        </div>
                                    </div>
                                    <div onClick={()=>{
                                        this.handleChangeColorCar('silver')
                                    }} className="row p-2 mt-2" style={{border:'1px solid #EEE',cursor:'pointer'}}>
                                        <div className="col-4 image">
                                            <img style={{width:'100%',display:'block'}} src="./img/CarBasic/icons/icon-silver.jpg"/>
                                        </div>
                                        <div className="col-8">
                                            <h5>Modern </h5>
                                            <p class="card-text">Pearl</p>
                                        </div>
                                    </div>
                                    <div onClick={()=>{
                                        this.handleChangeColorCar('red')
                                    }} className="row p-2 mt-2" style={{border:'1px solid #EEE',cursor:'pointer'}}>
                                        <div className="col-4 image">
                                            <img style={{width:'100%',display:'block'}} src="./img/CarBasic/icons/icon-red.jpg"/>
                                        </div>
                                        <div className="col-8">
                                            <h5>Modern </h5>
                                            <p class="card-text">Pearl</p>
                                        </div>
                                    </div>
                                    
                                </div>

                            </div>

                    </div>
                </div>
            </div>
        )
    }
}
