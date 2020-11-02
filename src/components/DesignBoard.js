import React from "react";
import DesignPad from "./DesignPad";

function DesignBoard(props) {
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
