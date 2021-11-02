import React from "react";
import "./DesignPad";
import DesignPad from "./DesignPad";

class DesignBoard extends React.Component {
  render() {
    return (
      <div className="pad-container">
        <DesignPad />
        <DesignPad />
        <DesignPad />
        <DesignPad />
      </div>
    );
  }
}

export default DesignBoard;