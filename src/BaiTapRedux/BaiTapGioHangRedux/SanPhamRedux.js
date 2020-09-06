import React, { Component } from 'react'
import {connect} from 'react-redux';
class SanPhamRedux extends Component {
    render() {
        let {sanPham} = this.props
        return (
            
                <div className="card text-white bg-primary">
  <img style={{height:350}} className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.tenSP} />
  <div className="card-body">
    <h4 className="card-title">{sanPham.tenSP}</h4>
        <p className="card-text">{sanPham.gia.toLocaleString()}</p>
        <button className="btn btn-success" onClick ={() =>{
            this.props.themGioHang(sanPham)
        }}>Thêm giỏ hàng</button>
  </div>
</div>

        )
    }
}

const mapDispatchToProps = (dispatch) =>{ //dispatch là hàm giống hàm setState
    return{
        themGioHang:(sanPhamClick) =>{
            console.log('Sanphamclick',sanPhamClick);
            const action ={
                type: 'THEM_GIO_HANG', //thuộc tính băt buộc
                sanPham:sanPhamClick //Nội dung đưa lên store của redux
            }
            //Dùng hàm dispatch gửi action lên redux
            dispatch(action);
        }
    }
}


export default connect(null,mapDispatchToProps)(SanPhamRedux);