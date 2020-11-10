import React from "react";
import "../css/DesignPad.css";

class DesignPad extends React.Component {
  state = {
    color: "light-grey"
  };

  onDragOver = event => {
    event.preventDefault();
  };

  onDrop = event => {
    event.preventDefault();
    this.setState({ color: event.dataTransfer.getData("color") });
    console.log("I have been completely dropped");
  };

  render() {
    return (
      <div
        className="wpad"
        onDragOver={this.onDragOver}
        onDrop={this.onDrop}
        style={{ backgroundColor: this.state.color }}
      ></div>
    );
  }
}
export default DesignPad;