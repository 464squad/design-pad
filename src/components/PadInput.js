import React from 'react'
import './PadInput.css'
function PadInput(props) {
    const dragStart = event =>{
        
        event.dataTransfer.setData('colors', 'black')
       
    }
    const dragOver=event=>{
        event.preventDefault();
    }
     // you need to create a drag start for each button  and dragover
   // if you need help https://www.pluralsight.com/guides/drag-and-drop-react-components  
    // https://www.youtube.com/watch?v=-MfTv5VRM0A https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
    return (
        <div className='left-box'>
           <div className='inner-box'>
            <button draggable='true' onDragStart={dragStart }onDragOver={dragOver}>1</button>
            <button draggable='true'>2</button>
            <button draggable='true'>3</button>
            <button draggable='true'>4</button>
            <button draggable='true'>5</button>
            <button draggable='true'>6</button>
            <button draggable='true'>7</button>
            <button draggable='true'>8</button>
           </div>
               
        </div>
    )
}

export default PadInput
