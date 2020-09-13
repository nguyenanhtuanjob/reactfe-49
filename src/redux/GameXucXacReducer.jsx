//Tổ chức reducer để lưu trữ và xử lý state của bài tập game xúc xắc
const mangXucXac = [
  { ma: 1, hinhAnh: "./img/game_xuc_xac/1.png" },
  { ma: 2, hinhAnh: "./img/game_xuc_xac/2.png" },
  { ma: 3, hinhAnh: "./img/game_xuc_xac/3.png" },
  { ma: 4, hinhAnh: "./img/game_xuc_xac/4.png" },
  { ma: 5, hinhAnh: "./img/game_xuc_xac/5.png" },
  { ma: 6, hinhAnh: "./img/game_xuc_xac/6.png" },
];
const stateDefault = {
  banChon: true,
  soBanThang: 0,
  tongSoBanChoi: 0,
  mangXucXac: [
    { ma: 1, hinhAnh: "./img/game_xuc_xac/1.png" },
    { ma: 6, hinhAnh: "./img/game_xuc_xac/6.png" },
    { ma: 6, hinhAnh: "./img/game_xuc_xac/6.png" },
  ],
};

export const gameXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC_TAI_XIU": {
      state.banChon = action.ketQuaChon;
      return { ...state };
    }
    case "PLAY_GAME": {
      //tạo ra 3 viển xúc sắc ngẫu nhiên adđ vào mảng xúc xắc ngẩu nhiên
      let mangXucXacNgauNhien = [];
      //Thực hiện random 3 lần đẻ tạo ra 3 viên xúc xắc ngẫu nhiên đưa vào mảng
      for (let i = 0; i < 3; i++) {
        let soNgauNhien = Math.floor(Math.random() * 6);
        //từ ngẫu nhiên tạo ra xúc xắc ngẫu nhiên
        let xucXacNgauNhien = mangXucXac[soNgauNhien];
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }
      //cập nhật lại mảng xúc xắc
      state.mangXucXac = mangXucXacNgauNhien;

      //số bàn chơi
      state.tongSoBanChoi+=1;

      //Tính điểm từ mảng xúc sắc ngẫu nhiên
      let tongDiem = mangXucXacNgauNhien.reduce((tongDiem,xxnn,index)=>{
          return tongDiem +=xxnn.ma;
      },0);

      if((tongDiem > 9 && state.banChon) ||(tongDiem <=9 && !state.banChon))
      {
        state.soBanThang +=1;
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};
