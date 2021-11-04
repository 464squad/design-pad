import React from "react";
import DesignPad from "./DesignPad";
import PadInput from './PadInput';
import "./DesignBoard.css";

function DesignBoard() {
  return (
    <div>
      <div  className='flex'>
        <DesignPad/>
        <DesignPad/>
        <DesignPad/>
        <DesignPad/>
      </div>
    </div>
  )
}

export default DesignBoard;
