import React, { Component } from 'react'
import {connect} from 'react-redux'
class XucXac extends Component {
    
    renderXucXac = ()=>{
        const {mangXucXac} = this.props;
        return mangXucXac.map((xucXac,index)=>{
            return <img key={index}className="ml-2" style={{width:'20%'}} src={xucXac.hinhAnh}/>
        })
    }
    render() {
        let {banChon} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <button style={{fontSize:'30px',border: banChon ? '3px solid yellow' : 'none' }} className="btn display-4 text-white bg-primary p-5" onClick={()=>{
                            this.props.datCuocTaiXiu(true)
                        }}>Tài</button>
                    </div>
                    <div className="col-6 text-center">
                        {this.renderXucXac()}
                    </div>
                    <div className="col-3">
                    <button style={{fontSize:'30px',border: !banChon ? '3px solid yellow' : 'none'}} className="btn display-4 text-white bg-primary p-5"onClick={()=>{
                            this.props.datCuocTaiXiu(false)
                        }}>Xỉu</button>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        mangXucXac: state.stateGameXucXac.mangXucXac,
        banChon: state.stateGameXucXac.banChon,
    }
}

//tạo ra props đưa dữ liệu lên redux store
const mapDispatchToProps = (dispatch) =>{
    return{
        datCuocTaiXiu:(ketQuaChon)=>{
            // console.log(ketQuaChon);
            const action ={
                type:'DAT_CUOC_TAI_XIU', //type: Phải đặt khác tất cả
                ketQuaChon
            }
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(XucXac)