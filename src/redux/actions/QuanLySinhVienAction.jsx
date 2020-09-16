import {THEM_SINH_VIEN} from '../types/QuanLySinhVienType';
import {CHINH_SUA_SINH_VIEN} from '../types/QuanLySinhVienType';
import {CAP_NHAT_SINH_VIEN} from '../types/QuanLySinhVienType';
export const themSinhVienAction = (sinhVien)=>{
    return{ 
        type: THEM_SINH_VIEN,
        sinhVien
    }
}

export const chinhSuaSinhVienAction = (sinhVien)=>(
    {
        type: CHINH_SUA_SINH_VIEN,
        sinhVien
    }
)

export const capNhatSinhVien = (sinhVienCapNhat) => ({
    type: CAP_NHAT_SINH_VIEN,
    sinhVienCapNhat
})


// {return noiDung } => (noidung)
//rxaction
// export const actionName = (payload) => ({
//     type: type,
//     payload
// })
