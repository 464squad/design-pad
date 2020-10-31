import React from 'react';
import '../css/PadOutput.css';

const overPad = (props) => {
  props.togglePad()
  props.allowDrop()
}


const PadOutput = (props) => {
  const { toggleDesignPad, togglePad, allowDrop, drag, drop } = props;
  return (
    <div className={`padOutput ${toggleDesignPad}`}>
      <div id="tl" onDrop={drop} onDragOver={allowDrop}></div>
      <div id="tr" onDrop={drop} onDragOver={allowDrop}></div>
      <div id="bl" onDrop={drop} onDragOver={allowDrop}></div>
      <div id="br" onDrop={drop} onDragOver={allowDrop}></div>
    </div>
  )
}

function DesignPad(props){
  const { toggleDesignPad, togglePad, allowDrop, drag, drop } = props;
  return (
    <PadOutput
      toggleDesignPad={toggleDesignPad}
      togglePad={togglePad}
      allowDrop={allowDrop}
      drag={drag}
      drop={drop}        
    />
  );
}

export default DesignPad;
