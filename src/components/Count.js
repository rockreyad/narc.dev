import React, { Component } from "react";
import Clock from "./Clock";

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: "February, 14, 2023" };
  }
  render() {
    return (
      <div className="flex flex-col justify-center items-center">
        {/* <div className="App-date">{this.state.deadline}</div> */}
        <Clock deadline={this.state.deadline} />
      </div>
    );
  }
}
export default Count;
