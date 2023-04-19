import React, { useState } from 'react';
import '../css/DesignContainer.scss';
import PadInput from './PadInput';
import DesignBoard from './DesignBoard';
import Draggable from 'react-draggable';

const DesignContainer = () => {
  const [edit, setEdit] = useState(false);

  const handleClick = () => {
    setEdit(prevEdit => !prevEdit);
  }

  const handleAllowDrop = (e) => {
    if (edit) {
      e.preventDefault();
    }
  }

  const handleOnDrag = (e) => {
    e.dataTransfer.setData("color", e.target.value);
  }

  const handleOnDrop = (e) => {
    e.preventDefault();
    const newColor = e.dataTransfer.getData("color");
    e.target.style.backgroundColor = newColor;
  }

  const editButtonClass = edit ? 'topContainer--editButton Editing' : 'topContainer--editButton NotEditing';

  return (
    <div className="DesignContainer">
      <div className="topContainer">
        <div className="topContainer--left"></div>
        <div className="topContainer--header">- DESIGN PAD -</div>
        <div className="topContainer--right">
          <button className={editButtonClass} onClick={handleClick}>EDIT</button>
        </div>
      </div>
      <div className="mainContainer">
        <Draggable className="mainContainer--left">
            <PadInput edit={edit} handleOnDrag={handleOnDrag} />
        </Draggable>
        <div className="mainContainer--center">
          <DesignBoard
            edit={edit}
            handleOnDrag={handleOnDrag}
            handleAllowDrop={handleAllowDrop}
            handleOnDrop={handleOnDrop}
          />
        </div>
        <div className="mainContainer--right"></div>
      </div>
      <div className="bottomContainer">
        <div className="bottomContainer--instr">Fill me with colors</div>
        <div className="bottomContainer--cred">Made by Chanyu, Usama, Michelle, Tahmina</div>
      </div>
    </div>
  );
}

export default DesignContainer;
