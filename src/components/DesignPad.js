import React from "react";
//import PadInput from "./PadInput";

function DesignPad(props) {
  return (
    
    <div
      className="design-pad"
      onDragOver={(e) => e.preventDefault()}
      // in onDrop the clasList changes with props.currentDragged
      onDrop={(e) => { 
        console.log("Drop");
        e.preventDefault();
        e.target.classList.add(`pad-${props.currentDragged}`);
      }}
    ></div>
  );
}

export default DesignPad;