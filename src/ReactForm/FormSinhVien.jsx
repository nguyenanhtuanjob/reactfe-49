import React, { Component } from "react";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { themSinhVienAction, capNhatSinhVien } from "../redux/actions/QuanLySinhVienAction";
class FormSinhVien extends Component {
  state = {
    values: {
      maSinhVien: "",
      tenSinhVien: "",
      soDienThoai: "",
      email: "",
    },
    errors: {
      maSinhVien: "",
      tenSinhVien: "",
      soDienThoai: "",
      email: "",
    },
  };
  handleChangeInput = (event) => {
    //event: là sự kiện trên control gọi hàm này khi onChange
    let { value, name } = event.target;
    // let name = event.target.name;
    let newValues = { ...this.state.values, [name]: value }; //chép giá trị
    // newValues = {
    //     ...newValues,
    //     [name]:value
    // }
    let newErrors = {
      ...this.state.errors,
      [name]: value.trim() === "" ? `${name} không được bỏ trống` : "",
    };

    let type = event.target.getAttribute("type_"); //lấy ra 1 giá trị thuộc tính trên thẻ do ta tự định nghĩa

    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (type === "email") {
      if (!regexEmail.test(value)) {
        newErrors[name] = "Email không hợp lệ";
      }
    }
    this.setState(
      {
        values: newValues,
        errors: newErrors,
      },
      () => {
        console.log(this.state);
      }
    );
  };
  handleSubmit = (event) => {
    event.preventDefault(); //chặn sự kiện submit của trình duyệt

    //validation
    let valid = true;
    //Nếu value = rỗng || lỗi khác rỗng khi không hợp lệ
    for (let key in this.state.values) {
      if (this.state.values[key].trim() === "") {
        valid = false;
      }
    }
    for (let key in this.state.errors) {
      if (this.state.errors[key].trim() !== "") {
        valid = false;
      }
    }

    if (!valid) {
        Swal.fire(
            'Thất bại',
            'Dữ liệu không hợp lệ',
            'error'
        );
        return;
    //   alert("Dữ liệu không hợp lệ");
    }

    const action = themSinhVienAction(this.state.values);

    // const action = {
    //   type: "THEM_SINH_VIEN",
    //   sinhVien: this.state.values,
    // };
    
    //dùng props.dispatch có sẵn khi liên kết với redux sẽ có props này => dispatch action lên reducer
    this.props.dispatch(action);
    Swal.fire(
        'Thành công',
        'Thêm sinh viên thành công!',
        'success'
    );
  };

  componentWillReceiveProps(newProps) {
    //Life Cycle chạy sau khi props thay đổi và trước khi render
    //Component không chạy lại khi setState
    //Mỗi lần nd bấm chỉnh sữa thì props thay dổi => newProps chính là prop mới (state.sinhVienSua của redux) => đem props mới gán vào this.state.values
    this.setState({
      values: newProps.sinhVienSua
    }) 
  }
  render() {
    // let {sinhVienSua} = this.props;
    let sinhVienSua = this.state.values;

    return (
      <form className="container-fluid">
        <div class="card text-left">
          <div className="card-header text-white bg-dark font-weight-bold">
            THÔNG TIN SINH VIÊN
          </div>
          <div class="card-body">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label for="">Mã sinh viên</label>
                  <input
                    type="text"
                    name="maSinhVien"
                    id=""
                    className="form-control"
                    onChange={this.handleChangeInput}
                    value = {sinhVienSua.maSinhVien}
                  />
                  <p className="text-danger">{this.state.errors.maSinhVien}</p>
                </div>
                <div className="form-group">
                  <label for="">Tên sinh viên</label>
                  <input
                    type="text"
                    name="tenSinhVien"
                    id=""
                    className="form-control"
                    onChange={this.handleChangeInput}
                    value = {sinhVienSua.tenSinhVien}
                  />
                  <p class="text-danger">{this.state.errors.tenSinhVien}</p>
                </div>
              </div>
              <div className="col-6">
                <div class="form-group">
                  <label for="">Email</label>
                  <input
                    type_="email"
                    name="email"
                    id=""
                    class="form-control"
                    onChange={this.handleChangeInput}
                    value = {sinhVienSua.email}
                  />
                  <p className="text-danger">{this.state.errors.email}</p>
                </div>
                <div className="form-group">
                  <label for="">Số điện thoại</label>
                  <input
                    type_="soDienThoai"
                    name="soDienThoai"
                    id=""
                    class="form-control"
                    onChange={this.handleChangeInput}
                    value = {sinhVienSua.soDienThoai}
                  />
                  <p className="text-danger">{this.state.errors.soDienThoai}</p>
                </div>
                <div className="form-group">
                  <div className="col-12 text-right">
                    <button
                      type="submit"
                      className="btn btn-success mr-5"
                      onClick={this.handleSubmit}
                    >
                      Thêm sinh viên
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={()=>{
                        //dispatch giá trị sau khi người dùng thay dổi lên redux
                        let action = capNhatSinhVien(this.state.values);
                        this.props.dispatch(action);
                      }}
                    >
                      Cập nhật sinh viên
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );

  }
  // componentDidUpdate(propsCu,stateCu){
  //   //set state trong didupdate phải có if

  //   if(this.props.sinhVienSua.maSinhVien !== stateCu.values.maSinhVien){
  //     this.setState({
  //       values:propsCu.sinhVienSua
  //     })
  //   }
    
  // }
}

const mapStateToProps = (state) =>{
  return{
    sinhVienSua: state.QuanLySinhVienReducer.sinhVienSua
  }
}

export default connect(mapStateToProps)(FormSinhVien);
