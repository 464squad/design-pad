import React from 'react';
import '../css/DesignPad.css';

const PadOutput = (props) => {
  const { allowDrop, drop } = props;
  return (
    <div className='padOutput'>
      <div id="tl" onDrop={drop} onDragOver={allowDrop}></div>
      <div id="tr" onDrop={drop} onDragOver={allowDrop}></div>
      <div id="bl" onDrop={drop} onDragOver={allowDrop}></div>
      <div id="br" onDrop={drop} onDragOver={allowDrop}></div>
    </div>
  )
}

function DesignPad(props){
  const { allowDrop, drop } = props;
  return (
    <PadOutput
      allowDrop={allowDrop}
      drop={drop}        
    />
  );
}

export default DesignPad;
