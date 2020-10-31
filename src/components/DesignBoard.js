import React from 'react';
import DesignPad from './DesignPad';

function DesignBoard(props){
  const { allowDrop, drop } = props;
  return (
    <div>
      <DesignPad
        allowDrop={allowDrop}
        drop={drop}
      />
    </div>
  );
}

export default DesignBoard;

