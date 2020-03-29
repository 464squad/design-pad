import React from "react";
import DesignPad from "./DesignPad";
import PadInput from "./PadInput";

class DesignBoard extends React.Component {
  render() {
    return (
      <div>
        <PadInput />
        <DesignPad />
      </div>
    );
  }
}

export default DesignBoard;
