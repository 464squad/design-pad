import React from "react";
import "../css/DesignPad.css";

class DesignPad extends React.Component {
  state = {
    color: ""
  };

  onDragOver = event => {
    event.preventDefault();
  };

  onDrop = event => {
    event.preventDefault();
    this.setState({ color: event.dataTransfer.getData("color") });
  };

  render() {
    return (
      <div
        className="designpad"
        onDragOver={this.onDragOver}
        onDrop={this.onDrop}
        style={{ backgroundColor: this.state.color }}
      ></div>
    );
  }
}
export default DesignPad;
