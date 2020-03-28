import React from "react";
import "./DesignPad.css";

class DesignPad extends React.Component {
  state = {
    color: "grey"
  };

  handleDragOver = e => {
    e.preventDefault();
  };

  handleDrop = e => {
    e.preventDefault();
    const color = e.dataTransfer.getData("color");
    this.setState({ color });
  };

  render() {
    return (
      <div
        className="pad"
        style={{ backgroundColor: this.state.color }}
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}
      ></div>
    );
  }
}

export default DesignPad;
