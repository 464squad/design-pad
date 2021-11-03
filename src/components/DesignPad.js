import React from 'react';
import "../style/DesignPad.css";

class DesignPad extends React.Component {
  state = {
    color: "grey" //default color
  };

  handleDragOver = drag => {
    drag.preventDefault();
    //keeps the page from reloading
  };

  handleDrop = drop => {
    drop.preventDefault();
    const color = drop.dataTransfer.getData("bgColor");
    //transfers the color data from PadButton component that is being dragged onto the pad
    this.setState({ color }); 
    //drops said color and changes state to color that was being dragged
  };

  render() {
    return (
      <div
        className="pad"
        style={{ backgroundColor: this.state.color }} //grey color 
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}>
        </div>
    );
  }
}

export default DesignPad;