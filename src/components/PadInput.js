import React from "react";

function PadInput(props) {
  const colors = props.colors || [];
  const isEditing = props.isEditing;
  const bgColor = isEditing ? 'bg-blue' : 'bg-gray';

  return (
    <ul className={`pad-input  ${bgColor}`}>
      {colors.map((color) => (
        <li 
            draggable= { isEditing ? true : false}
            onDragStart={e => e.dataTransfer.setData('color', color)} className="pad-input-color">
          {color}
        </li>
      ))}
    </ul>
  );
}

export default PadInput;
