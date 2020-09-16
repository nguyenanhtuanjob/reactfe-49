import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
import Header from "./Header";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sinhVien: {
        id: 1,
        name: "nguyen van a",
      }, //giá trị object
      number: 1,
    };
    console.log("constructor");
  }
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  render() {
    console.log("render component cha");
    return (
      <div className="container">
        <h1>{this.state.sinhVien.name}</h1>
        <button
          onClick={() => {
            let sinhVien = { ...this.state.sinhVien };
            sinhVien.name = "Nguyễn văn B";
            this.setState({
              sinhVien: sinhVien,
            });
          }}
        >
          Tăng
        </button>
        <h1>{this.state.number}</h1>
        <button
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          set Number
        </button>

        {this.state.number < 3 ? <Header sinhVien={this.state.sinhVien} /> : ""}
        <ChildComponent />
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate(propCu, stateCu) {
    console.log("componentDidUpdate child");
  }

  componentWillUnmount() {
    //Chạy trước kh component mất khỏi giao diện
    console.log("componentWillUnmount header");
  }
}
