import React, { useState } from "react";

function PadInput(props) {
  // we create inputs 1-8 
  const [padInputs, setPadInputs] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    //when editMode is disabled we cannot drag the inputs
    <ul className={`pad-input ${props.editMode ? "" : "disabled"}`}>
      {padInputs.map((pad) => (
        <li
          key={pad}
          draggable onDragStart={(e) => {props.setCurrentDragged(pad);}}
        >
          {pad}
        </li>
      ))}
    </ul>
  );
}

export default PadInput;