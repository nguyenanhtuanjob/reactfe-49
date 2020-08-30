import React, { Component } from 'react'

export default class GioHang extends Component {


    renderGioHang = () =>{
        return this.props.gioHang.map((spGH,index)=>{
            return(
                <tr key={index}>
                    <td>{spGH.maSP}</td>
                    
                    <td><img style={{width:50, height:50}} src={spGH.hinhAnh} /></td>
                    <td>{spGH.tenSP}</td>
                    <td>
                        <button className="btn btn-primary" onClick={()=>{
                            this.props.tangGiamSoLuong(spGH.maSP,true)
                        }}>+</button>
                        {spGH.soLuong}
                        <button className="btn btn-primary" onClick={()=>{
                            this.props.tangGiamSoLuong(spGH.maSP,false)
                        }}>-</button>
                    </td>
                    <td>{spGH.gia.toLocaleString()}</td>
                    <td>{spGH.gia *spGH.soLuong}</td>
                    <td><button className="btn btn-danger" onClick={()=>{
                        this.props.xoaGioHang(spGH.maSP)
                    }} >Xoá</button></td>
            </tr>
            )
        })
    }
    render() {
        return (
                        <div>
            
            {/* Modal */}
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">Giỏ Hàng</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    </div>
                    <div className="modal-body">
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
                                    {
                                        this.props.gioHang.reduce((tongTien,spGH,index)=>{
                                            return tongTien += spGH.gia * spGH.soLuong
                                        },0).toLocaleString()
                                    }
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save</button>
                    </div>
                </div>
                </div>
            </div>
        </div>

        )
    }
}
