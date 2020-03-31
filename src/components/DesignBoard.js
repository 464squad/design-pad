import React from "react";
import DesignPad from "./DesignPad";
import "../css/DesignBoard.css";

class DesignBoard extends React.Component {
  render() {
    return (
      <div>
        <DesignPad />
        <DesignPad />
        <DesignPad />
        <DesignPad />
      </div>
    );
  }
}

export default DesignBoard;
