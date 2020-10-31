import React from 'react';
import DesignPad from './DesignPad';

function DesignBoard(props){
  const { toggleDesignPad, togglePad, allowDrop, drag, drop } = props;
  return (
    <div>
      <DesignPad
        toggleDesignPad={toggleDesignPad}
        togglePad={togglePad}
        allowDrop={allowDrop}
        drag={drag}
        drop={drop}
      />
    </div>
  );
}

export default DesignBoard;

