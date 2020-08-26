import React, { Component } from 'react'

export default class ThongTinSinhVien extends Component {

    //this.props: là thuộc tính có sẵn của component, Lưu ý: dùng để nhận giá trị từ component cha truyền vào, và không thay đổi được giá trị đó
    //state 
    //props là để nhận dữ liệu từ cha xuống con và binding dữ liệu ra giao diện
    render() {
        return (
            <div>
                <div className="card text-left">
                <img style={{width:'100%'}} className="card-img-top" src={this.props.sinhVien.hinhAnh} alt={this.props.sinhVien.hinhAnh}/>
                <div className="card-body">
        <h4 className="card-title">{this.props.sinhVien.hoTen}</h4>
        <p className="card-text">{this.props.sinhVien.lop}</p>
                </div>
                </div>

            </div>
        )
    }
}
