import React from 'react';
import DesignPad from './DesignPad';
import '../css/DesignBoard.scss';

const DesignBoard = ({ handleOnDrag, handleAllowDrop, handleOnDrop, edit }) => {
  const board = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div className="DesignBoard">
      <div className="DesignBoard__grid flex-container flex-wrap">
        {board.map((boardNum) => (
          <DesignPad
            edit={edit}
            key={boardNum}
            handleOnDrag={handleOnDrag}
            handleAllowDrop={handleAllowDrop}
            handleOnDrop={handleOnDrop}
          />
        ))}
      </div>
    </div>
  );
};

export default DesignBoard;
