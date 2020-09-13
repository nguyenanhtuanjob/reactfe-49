import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'
import {connect} from 'react-redux'
class DanhSachSinhVien extends Component {

    renderSinhVien = () =>{
        return this.props.mangSinhVien.map((sinhVien,index)=>{
            return(
                <tr key={index}>
                    <td>{sinhVien.maSinhVien}</td>
                    <td>{sinhVien.tenSinhVien}</td>
                    <td>{sinhVien.email}</td>
                    <td>{sinhVien.soDienThoai}</td>
                    <td>
                        <button className="btn btn-primary">Update</button>
                    </td>
                    <td>
                        <button className="btn btn-danger">X</button>
                    </td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div>
                <FormSinhVien/>
                <div className="container-fluid">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã sinh viên</th>
                            <th>Tên sinh viên</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSinhVien()}
                        
                    </tbody>
                </table>
                </div>
                
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{ 
        mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien,
    }
}
export default connect(mapStateToProps)(DanhSachSinhVien)
