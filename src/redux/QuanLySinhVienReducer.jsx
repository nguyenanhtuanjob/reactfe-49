import {THEM_SINH_VIEN,CHINH_SUA_SINH_VIEN, CAP_NHAT_SINH_VIEN} from './types/QuanLySinhVienType';
const initialState = {
  mangSinhVien: [
    {
      maSinhVien: 1,
      tenSinhVien: "Nguyễn Văn A",
      soDienThoai: 1909009091,
      email: "nguyenvana@gmail.com",
    },
    {
      maSinhVien: 2,
      tenSinhVien: "Nguyễn Văn B",
      soDienThoai: 1909090901,
      email: "nguyenvanb@gmail.com",
    },
  ],
  sinhVienSua:{ //State quản lý thông tin sinh viên trên ô input
    maSinhVien: "",
    tenSinhVien: "",
    soDienThoai: "",
    email: "",
  }
};

export const QuanLySinhVienReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEM_SINH_VIEN: {
      state.mangSinhVien = [...state.mangSinhVien, action.sinhVien];
      console.log(action, "action");
      console.log(state.mangSinhVien, "mangSv");
      return { ...state };
    }
    case CHINH_SUA_SINH_VIEN:{
      //thay đổi state sinhVienSua = sinhVien khi người dùng click vào
      state.sinhVienSua = action.sinhVien;
      return { ...state };
    }
    case CAP_NHAT_SINH_VIEN:{
      let mangSinhVienCapNhat = [...state.mangSinhVien];
      //Tìm sinh viên cập nhật sau khi người dùng chỉnh sữa trong mảng dựa vào mã
      let index = state.mangSinhVien.findIndex( sv => sv.maSinhVien === action.sinhVienCapNhat.maSinhVien);

      if(index !== -1)
      {
        //Gán lại sinhVien trong mảng có mã = sinh viên cập nhật
        mangSinhVienCapNhat[index] = {...action.sinhVienCapNhat};
      }
      //Cập nhật lại state.mangSinhVien
      state.mangSinhVien = mangSinhVienCapNhat
      //trả về state mới
      return{ ...state}
    }
    default:
      return state;
  }
};
