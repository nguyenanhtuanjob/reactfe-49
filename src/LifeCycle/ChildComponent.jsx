import React, { Component } from "react";

export default class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("constructor child");
  }
  static getDerivedStateFromProps(newState, newProps) {
    console.log("getDerivedStateFromProps");
    return null
  }
  render() {
    console.log("renderchild");
    return <div>

    </div>
  }
  componentDidMount() {
    console.log("componentDidMount child");
  }

  componentDidUpdate(propCu,stateCu){
      console.log("componentDidUpdate child");
  }
}
