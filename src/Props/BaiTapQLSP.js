import React, { Component } from "react";
import SanPham from "./SanPham";

export default class BaiTapQLSP extends Component {
  // mangSanPham = [
  //         { maSP: 1, tenSP: 'Black Berry',hinhAnh:'./img/sp_blackberry.png', gia: 1000 },
  //         { maSP: 2, tenSP: 'Iphone X',hinhAnh:'./img/sp_iphoneX.png', gia: 2000 },
  //         { maSP: 3, tenSP: 'Note 7',hinhAnh:'./img/sp_note7.png', gia: 3000 },
  //         { maSP: 3, tenSP: 'Vivo 850',hinhAnh:'./img/sp_vivo850.png', gia: 3000 }
  // ]

  state = {
    sanPhamChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      gia: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
  };

  
  renderSanPham = () => {
    return this.props.mangSanPham.map((product, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPham sp={product} xemChiTiet={this.xemChiTiet}/>
        </div>
      );
    });
  };
  xemChiTiet = (spClick) =>{
    console.log('spClick',spClick);
    this.setState({
        sanPhamChiTiet:spClick,
    })
    };
    //setState cho sản phẩm ch tiết = sản phẩm được click
    
  render() {
    let {
      maSP,
      tenSP,
      hinhAnh,
      manHinh,
      cameraSau,
      cameraTruoc,
      heDieuHanh,
      gia,
      ram,
      rom,
    } = this.state.sanPhamChiTiet;
    return (
      <div className="container">
        <h3>Danh sách sản phẩm</h3>
        <div className="row">{this.renderSanPham()}</div>
        <hr />
        <div className="row">
          <div className="col-4 text-center">
            <h3>{tenSP}</h3>
            <img style={{ width: "100%" }} src={hinhAnh} />
          </div>
          <div className="col-8">
            <h3>Thông Số Kỹ Thuật</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Màn hình</th>
                  <th>{manHinh}</th>
                </tr>
                <tr>
                  <th>Hệ điều hành</th>
                  <th>{heDieuHanh}</th>
                </tr>
                <tr>
                  <th>Camera trước</th>
                  <th>{cameraTruoc}</th>
                </tr>
                <tr>
                  <th>Camera sau</th>
                  <th>{cameraSau}</th>
                </tr>
                <tr>
                  <th>RAM</th>
                  <th>{ram}</th>
                </tr>
                <tr>
                  <th>ROM</th>
                  <th>{rom}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
