import React from "react";

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

export default Pad;