import React from "react";
import "../css/DesignPad.css";

class DesignPad extends React.Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div className="pads">
        <div className="wpad" onDrop={this.onDrop}>
          {" "}
        </div>
        <div className="wpad2"> </div>
        <div className="wpad3"> </div>
        <div className="wpad4"> </div>
      </div>
    );
  }

  fCo() {
    const { count } = this.state;
    return count === 0 ? "zez" : count;
  }
}
export default DesignPad;
