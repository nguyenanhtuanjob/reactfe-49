import React, { Component } from 'react'
import SanPhamGH from './SanPhamGH'


export default class DanhSachSanPham extends Component {
    renderSanPham =() =>{
        return this.props.mangSanPham.map((sanPham,index) =>{
            return (
                <div className="col-4" key={index}>
                    <SanPhamGH sanPham={sanPham} themGioHang={this.props.themGioHang}/>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    {this.renderSanPham()}
                </div>
                
            </div>
        )
    }
}
