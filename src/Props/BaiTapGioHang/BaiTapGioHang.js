import React, { Component } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
import GioHang from "./GioHang";

export default class BaiTapGioHang extends Component {
  //state giỏ hàng
  //state ở đâu setstate nằm tại đó
  state = {
    gioHang: [
      {
        maSP: 1,
        tenSP: "VinSmart Live",
        gia: 5700000,
        hinhAnh: "./img/vsphone.jpg",
        soLuong: 1,
      },
    ],
  };
  mangSanPham = [
    {
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
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      gia: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      gia: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  //Phương thức thêm giỏ Hàng
  themGioHang = (spClick) => {
    console.log(spClick);

    //Tạo ra 1 sản phẩm giỏ hàng từ sản phẩm được click
    let spGioHang = {
      maSP: spClick.maSP,
      tenSP: spClick.tenSP,
      hinhAnh: spClick.hinhAnh,
      gia: spClick.gia,
      soLuong: 1,
    };
    //setstate giỏ hàng tại đây
    let gioHangUpdate = this.state.gioHang;

    //Tìm sp đó có trong giỏ hàng không
    let index = gioHangUpdate.findIndex((spGH) => spGH.maSP === spGioHang.maSP);

    if (index !== -1) {
      //Tìm thấy tại vị trí index => tăng số lượng
      gioHangUpdate[index].soLuong += 1;
    } else {
      //Không tìm thấy trong giỏ hàng =>thêm sản phẩm vào giỏ hàng
      gioHangUpdate.push(spGioHang);
    }
    //setState giỏ hàng = giỏ hàng update
    this.setState({
      gioHang: gioHangUpdate,
    });
  };

  tinhSoLuongGH = ()=>{
      return this.state.gioHang.reduce((soLuong,spGH,index)=>{
          return soLuong += spGH.soLuong;
      },0)
  }
  xoaGioHang = (maSP) =>{
    //   Cách 1:
    //   let gioHangUpdate = this.state.gioHang;

    //   //Tìm xem trong giỏ hàng có mã sp được cclick(nút xoá) không?
    //   let index = gioHangUpdate.findIndex(spGH => spGH.maSP === maSP);
    //   if(index !== -1) {
    //       gioHangUpdate.splice(index,1);
    //   }
    //   //Sau khi xoá sp giỏ hàng thì cập nhậ lại state
    //   this.setState({
    //       gioHang: gioHangUpdate
    //   })
    //Cách 2:
      this.setState({
          gioHang: this.state.gioHang.filter(sp =>sp.maSP !== maSP)
      })
  }

  tangGiamSoLuong = (maSP,tangGiam) => {
      
      //TangGiam =false => giảm
        console.log(maSP,tangGiam);
        let gioHangUpdate = this.state.gioHang;

        let index = gioHangUpdate.findIndex(spGioHang => spGioHang.maSP === maSP);

        if(index !== -1){
            if(tangGiam){
                //TangGiam = true => tăng
                gioHangUpdate[index].soLuong +=1;
            }else{
                //Nếu sp giảm thì xem số luong >1 mới cho giảm
                if(gioHangUpdate[index].soLuong >1){
                    gioHangUpdate[index].soLuong -=1;
                }else{
                    alert('Số lượng tối thiểu là 1');
                }
            }
        }
        this.setState({
            gioHang:gioHangUpdate
        })
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-center">Bài tập Giỏ Hàng</h3>
        <div className="gioHang">
          <div className="text-right text-danger">
            <span
              data-toggle="modal"
              data-target="#modelId"
              style={{ cursor: "pointer" }}
            >
              Giỏ Hàng({this.tinhSoLuongGH()})
            </span>
          </div>
          <GioHang gioHang={this.state.gioHang} xoaGioHang = {this.xoaGioHang} tangGiamSoLuong ={this.tangGiamSoLuong} />
        </div>
        <DanhSachSanPham
          mangSanPham={this.mangSanPham}
          themGioHang={this.themGioHang}
          
        />
      </div>
    );
  }
}
