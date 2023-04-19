import React from 'react';
import '../css/DesignPad.scss';

const DesignPad = ({ handleOnDrag, handleAllowDrop, handleOnDrop, edit }) => {
  return (
    <div
      className="designPad"
      onDragStart={handleOnDrag}
      onDragOver={handleAllowDrop}
      onDrop={handleOnDrop}
      draggable={edit}
    ></div>
  );
};

export default DesignPad;
