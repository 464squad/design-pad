import React from "react";
import "../css/PadInput.css";

class PadInput extends React.Component {
  constructor(props) {
    super(props);
    this.onDrag = this.onDrag.bind(this);
  }

  onDrag = event => {
    event.preventDefault();
    console.log("You are dragging me");
  };

  onDragOver = event => {
    event.preventDefault();
  };

  onDrop = event => {
    console.log("I have been dropped");
  };

  render() {
    return (
      <div className="main-container">
        <div className="row">
          <div draggable onDrag={this.onDrag}>
            1
          </div>
          <div draggable onDrag={this.onDrag}>
            2
          </div>
        </div>
        <div className="row">
          <div draggable onDrag={this.onDrag}>
            3
          </div>
          <div draggable onDrag={this.onDrag}>
            4
          </div>
        </div>
        <div className="row">
          <div draggable onDrag={this.onDrag}>
            5
          </div>
          <div draggable onDrag={this.onDrag}>
            6
          </div>
        </div>
        <div className="row">
          <div draggable onDrag={this.onDrag}>
            7
          </div>
          <div draggable onDrag={this.onDrag}>
            8
          </div>
        </div>
      </div>
    );
  }
}

export default PadInput;
