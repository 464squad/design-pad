import React from "react";
import DesignPad from "./DesignPad";
//In the DesignBoard we create 4 design pads similar to Cameron's example
function DesignBoard(props) {
  return (
    <div className="design-board">
   
      <DesignPad currentDragged={props.currentDragged} />
      <DesignPad currentDragged={props.currentDragged} />
      <DesignPad currentDragged={props.currentDragged} />
      <DesignPad currentDragged={props.currentDragged} />
    </div>
  );
}

export default DesignBoard;
