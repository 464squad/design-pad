
import React from 'react';

function PadInput(props) {
    
    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data))
    }

      return (
        <div>
            
            <p className="input" draggable="true" onDragStart="drag(event)"> {props.num} </p>
            
        </div>

  )
}


 
export default PadInput;