import React from "react";
import DesignPad from "./DesignPad";
import PadInput from "./PadInput";
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
