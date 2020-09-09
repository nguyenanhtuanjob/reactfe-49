import React, { Component } from 'react'
import { connect} from 'react-redux'
class KetQuaTroChoi extends Component {
    render() {
        // console.log(this.props.banChonCom);
        const {banChon,soBanThang,tongSoBanChoi} = this.props;
        return (
            <div>
                <div className="display-4 text-center">
        Tổng diểm: <span className="text-center text-danger">{this.props.mangXucXac.reduce((tongDiem,xxnn,index)=>{
            return tongDiem += xxnn.ma;
        },0)}</span>
                </div>
                <div className="display-4 text-center">
        BẠN CHỌN: <span className="text-center text-danger">{banChon ? 'TÀI' : 'XỈU'}</span>
                </div>
                <div className="display-4 text-center">
        SỐ BÀN THẮNG: <span className="text-center text-success">{soBanThang}</span>
                </div>
                <div className="display-4 text-center">
        TỔNG SỐ BÀN CHƠI: <span className="text-center text-warning">{tongSoBanChoi}</span>
                </div>
                <div className="mt-5 text-center">
                    <button className="btn btn-success" onClick ={() =>{
                        this.props.playGame()
                    }}>PLAY GAME</button>
                </div>
            </div>
        )
    }
}
//lấy giá trị từ state redux về biến đỏi thành props của component
const mapStateToProps = state => { //state là giá trị từ rootReducer truyền vào
    return {
        banChon:state.stateGameXucXac.banChon,
        soBanThang : state.stateGameXucXac.soBanThang,
        tongSoBanChoi: state.stateGameXucXac.tongSoBanChoi,
        mangXucXac : state.stateGameXucXac.mangXucXac,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        playGame: () =>{
            dispatch({
                type: 'PLAY_GAME'
            })
        }
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(KetQuaTroChoi)