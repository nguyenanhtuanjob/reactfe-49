import React, { Component } from "react";
import {connect} from "react-redux";
class GioHangRedux extends Component {

    renderGioHang = () =>{
        return this.props.gioHang.map((spGioHang,index)=>{
            return <tr key={index}>
                <td>{spGioHang.maSP}</td>
                <td><img style={{width:50,height:50}} src={spGioHang.hinhAnh}  /></td>
                <td>{spGioHang.tenSP}</td>
                <td>
                    <button className="btn btn-primary" onClick={() =>{
                        this.props.tangGiamSoLuong(spGioHang.maSP,true)
                    }}>+</button>
                    {spGioHang.soLuong}
                    <button className="btn btn-primary"onClick={() =>{
                        this.props.tangGiamSoLuong(spGioHang.maSP,false)
                    }}>-</button>
                </td>
                <td>{spGioHang.gia}</td>
                <td>{spGioHang.gia *spGioHang.soLuong}</td>
                <td><button className="btn btn-danger" onClick={()=>{
                    this.props.xoaGioHang(spGioHang.maSP)
                }}>Xoá</button></td>
            </tr>
        })
    }
  render() {
      return <div>
        <h3>
            Giỏ hàng
        </h3>
        <table className="table">
                        <thead>
                            <tr>
                                <th>Mã Sản Phẩm</th>
                                <th>Hình Ảnh</th>
                                <th>Tên sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Đơn giá</th>
                                <th>Thành Tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderGioHang()}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="5">
                                </td>
                                <td>Tổng tiền</td>
                                <td>
                                    {this.props.gioHang.reduce((tongTien,spGH,index)=>{
                                       return tongTien += spGH.soLuong *spGH.gia
                                    },0).toLocaleString()}
                                </td>
                            </tr>
                        </tfoot>
        </table>
    </div>
  }
}

const mapDispatchToProps = (dispatch) =>{

    return { 
        xoaGioHang: (maSP)=>{
            console.log('maspclick',maSP);
            const action ={
                type:'XOA_GIO_HANG',
                maSP:maSP
            }
            //Gửi dữ liệu lên reducer
            dispatch(action);
        },
        tangGiamSoLuong:(maSP,tangGiam) =>{
            //cách viết khác
            dispatch({
                type:'TANG_GIAM_SOLUONG',
                maSP:maSP,
                tangGiam:tangGiam
            });
        }
    }
}


//Phương thức biến đổi stateRedux => props của component
const mapStateToProps = (state) =>{ //state là rootReducer
    return {
        gioHang: state.GioHangReducer.gioHang
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GioHangRedux)