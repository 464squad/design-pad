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
          <div onDrag={this.onDrag}>1</div>
          <div>2</div>
        </div>
        <div className="row">
          <div>3</div>
          <div>4</div>
        </div>
        <div className="row">
          <div>5</div>
          <div>6</div>
        </div>
        <div className="row">
          <div>7</div>
          <div>8</div>
        </div>
      </div>
    );
  }
}

export default PadInput;
