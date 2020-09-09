import React, { Component } from 'react'
import XucXac from './XucXac';
import KetQuaTroChoi from './KetQuaTroChoi';
import './styleGame/styleGame.css';
export default class BaiTapGameTaiXiu extends Component {
    render() {
        return (
            <div className="gameXucXac">
                <h3 className="display-4 text-center text-dark">Bài tập xúc xắc</h3>
                <XucXac/>
                <KetQuaTroChoi/>
            </div>
        )
    }
}
