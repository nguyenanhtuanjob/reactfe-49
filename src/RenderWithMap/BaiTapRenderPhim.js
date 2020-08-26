import React, { Component } from "react";
import data from "./DataFilms.json";
import HeaderPhim from "./HeaderPhim.js";
import "./BaiTapRender.css";
export default class BaiTapRenderPhim extends Component {
  renderPhim = () => {
    return data.map((movie, index) => {
      return (
        <div className="col-2 py-2">
          <div className="card text-left">
            <img
              className="card-img-top"
              style={{ height: 300 }}
              src={movie.hinhAnh}
              alt={movie.tenPhim}
            />
            <div className="card-body">
              <h4 className="card-title" style={{ height: 50 }}>
                {movie.tenPhim.length > 20 ? (
                  <span>{movie.tenPhim.substr(0, 20)}...</span>
                ) : (
                  <span>{movie.tenPhim}</span>
                )}
              </h4>
              <p className="card-text" style={{height:25}}>
                    {/* cách 1 */}
                {movie.moTa.length >75 ? <span>{movie.moTa.substr(0,75)} ...</span> : <span>{movie.moTa}</span>}

                  {/* cách 2 */}
                {/* {movie.moTa.split(" ").slice(0, 8).join(" ") + "..."} */}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="background--custom">
        <HeaderPhim />

        <div className="container-fluid">
          <div className="row">{this.renderPhim()}</div>
        </div>
      </div>
    );
  }
}
