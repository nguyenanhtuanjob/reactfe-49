import React, { Component } from 'react'
import './Styling.scss';
import style from './Styling.module.scss';
export default class Child extends Component {
    render() {
        return (
            <div>
                <div className={style.content}>
                    <p className={style.text}>
                        22222
                    </p>
                    child commponent
                </div>
                <p style={{border:'5px solid red',background:'orange',fontSize:'15px'}}>
                    Hello cybersoft
                </p>
            </div>
        )
    }
}
