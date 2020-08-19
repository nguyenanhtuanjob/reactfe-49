import React, { Component } from 'react'

export default class DataBinding extends Component {

    //Thuoc tinh
    product ={
        id:1,
        name:'IphoneX',
        price:1000
    }
    renderCard =() => {
        return <div class="card text-left">
          <img class="card-img-top" src="https://picsum.photos/100/100" />
          <div class="card-body">
            <h4 class="card-title">{this.product.name}</h4>
            <p class="card-text">{this.product.price}</p>
          </div>
        </div>
    }
    render() {



        //Binding data
        let title = 'hello front end 49';
        let photo = 'http://picsum.photos/200/200';

        //Binding function
        let renderImg = () =>{
            return <img src="https://picsum.photos/100/100"/>
        }

        

        return (
            <div className="text-center">
                <h1 id="title">{title}</h1>
                <img src={photo}/>
                <img src="./img/logo.jpg" />
                <div>
                    {renderImg()}
                </div>
                <div>
                    {this.renderCard()}
                </div>
                <div class="card text-left">
                  <img class="card-img-top" src="holder.js/100px180/"/>
                  <div class="card-body">
                    <h4 class="card-title">{this.product.name}</h4>
                    <p class="card-text">{this.product.price}</p>
                  </div>
                </div>
            </div>
        )
    }
}
