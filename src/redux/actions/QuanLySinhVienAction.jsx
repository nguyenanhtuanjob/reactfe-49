export const THEM_SINH_VIEN = 'THEM_SINH_VIEN'


export const themSinhVienAction = (sinhVien)=>{
    return{ 
        type: THEM_SINH_VIEN,
        sinhVien
    }
}