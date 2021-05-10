import React, { useState } from "react";
import "./pad.css";

const Pad = (props) => {
  const [data, setData] = useState({
    positions: new Array(9).fill(null),
  });

  
  const dragStart = (e) => {
   const target = e.target;
    e.dataTransfer.setData('CardId', target.id);
    
    setTimeout(() => {
        target.style.display = 'none'
    },0)

  };
 
  const dragOver = e => {
      e.stopPropagation();
  }

  let padButtons = null;
  padButtons = data.positions.map((number, index) => {
    if (index > 0 && !props.buttonState) {
      return (
        <div
          className="buttonsPads"
          draggable="true"
          key={index}
          id={`div${index}`}
          onDragStart={dragStart}
          onDragOver={dragOver}
         
        >
          {index}
        </div>
      );
    } else if (index > 0 && props.buttonState) {
      return (
        <div className="buttonsPads" key={index} id={`div${index}`}>
          {index}
        </div>
      );
    } else {
      return null;
    }
  });

  return <div className="padDesign">{padButtons}</div>;
};
export default Pad;
