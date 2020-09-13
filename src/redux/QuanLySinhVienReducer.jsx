import {THEM_SINH_VIEN} from './types/QuanLySinhVienType';
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
};

export const QuanLySinhVienReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEM_SINH_VIEN: {
      state.mangSinhVien = [...state.mangSinhVien, action.sinhVien];
      console.log(action, "action");
      console.log(state.mangSinhVien, "mangSv");
      return { ...state };
    }
    default:
      return state;
  }
};
