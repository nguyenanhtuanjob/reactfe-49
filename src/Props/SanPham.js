import React, { Component } from 'react'

export default class SanPham extends Component {


    render() {
        let product = this.props.sp;
        return (
            <div className="card text-left">
            <img
              style={{ width: "100%", height: "250px" }}
              className="card-img-top"
              src={product.hinhAnh}
              alt={product.hinhAnh}
            />
            <div className="card-body">
              <h4 className="card-title">{product.tenSP}</h4>
              <p className="card-text">{product.gia}</p>
              <button onClick={()=>{
                  this.props.xemChiTiet(product)
              }} className="btn btn-success">Chi tiết</button>
            </div>
          </div>
        )
    }
}
