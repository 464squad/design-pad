import { render } from '@testing-library/react';
import React, {useState} from 'react';

function DesignPad() {
  // SETTING STATE TO SOMETHING RANDOM FOR RIGHT NOW
const[color, setColor] = useState("lightblue");

// LETS YOU KNOW WHAT HAPPENS WHEN YOU DROP A COLOR ON TOP OF A PAD
    let handleDrop = e => {
      e.preventDefault();
      const data = e.dataTransfer.getData("text");
      setColor(data);
    
    // alert("dropped"); this was used to let my know this works
  }

  // RESETS THE FOUR PADS TO WHITE
 let reset =(e) => {
  setColor("white");
 }

// ALLOWS YOU TO DRAG WITHOUT AN ISSUE
  let handleDragOver = e => {
    e.preventDefault(); 
  }

    return (
     
          <div class="flex-container2">
            {/* THE FOUR PADS ARE BELOW */}
                <div onDrop={handleDrop} onDragOver={handleDragOver} style={{backgroundColor: color}}>1 {color}</div>
                <div onDrop={handleDrop} onDragOver={handleDragOver} style={{backgroundColor: color}}>2</div>
                <div onDrop={handleDrop} onDragOver={handleDragOver} style={{backgroundColor: color}}>3</div>  
                <div onDrop={handleDrop} onDragOver={handleDragOver} style={{backgroundColor: color}}>4</div>
                <button onClick={reset}>Reset</button>
      </div>
    );
  
    }
export default DesignPad;