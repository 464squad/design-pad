import React from "react";
import DesignBoard from "./DesignBoard";
import PadInput from "./PadInput";

function DesignContainer(props) {
  //Implement PadInput and grab the 8 inputs, pass props in editMode(false) and setCurrentDragged 
  //Creating an EDIT button and determining its state with a click on the button 
  return (
    <div className="design-container">

      <PadInput
        editMode={props.editMode}
        setCurrentDragged={props.setCurrentDragged}
      />
      <button
        className={`edit-button ${props.editMode ? "" : "edit-mode"}`} 
        onClick={() => props.setEditMode(true)}>EDIT</button>

      <DesignBoard currentDragged={props.currentDragged} />
    </div>
  );
}

export default DesignContainer;