

import React from "react";
import "../css/PadInput.css";


function Pad(props) {
  const handleOnDragStart = event => {
    console.log("You are dragging me");
    event.dataTransfer.setData("color", props.color);
  };

  return (
    <div draggable={props.editing} onDragStart={handleOnDragStart}>
      {props.color}
    </div>
  );
}

function PadInput(props) {
  
  return (
    <div className="main-container">
      <div className="row">
        <Pad editing={props.editing} color="blue" />
        <Pad editing={props.editing} color="red" />
      </div>
      <div className="row">
        <Pad editing={props.editing} color="purple" />
        <Pad editing={props.editing} color="green" />
      </div>
      <div className="row">
        <Pad editing={props.editing} color="pink"  />
        <Pad editing={props.editing} color="yellow" />
      </div>
      <div className="row">
        <Pad editing={props.editing} color="black" />
        <Pad editing={props.editing} color="orange" />
      </div>
    </div>
  );
}

export default PadInput;