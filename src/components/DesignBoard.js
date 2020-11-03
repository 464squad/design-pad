import React from "react";
import DesignPad from "./DesignPad";

function DesignBoard(props) { // to create the DesignBoard and making all pads into gray.
  return (
    <div className="design-board">
      <DesignPad bgColor="gray" />
      <DesignPad bgColor="gray" />
      <DesignPad bgColor="gray" />
      <DesignPad bgColor="gray" />
    </div>
  );
}

export default DesignBoard;
