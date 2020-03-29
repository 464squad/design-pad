import React from "react";
import "../css/DesignPad.css";

class DesignPad extends React.Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div class="pads">
        <div class="wpad"> </div>
        <div class="wpad2"> </div>
        <div class="wpad3"> </div>
        <div class="wpad4"> </div>
      </div>
    );
  }

  fCo() {
    const { count } = this.state;
    return count === 0 ? "zez" : count;
  }
}
export default DesignPad;
