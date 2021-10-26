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
            <button draggable={props.offNon} onDragStart={dragStart }onDragOver={dragOver}>1</button>
            <button draggable={props.offNon}>2</button>
            <button draggable={props.offNon}>3</button>
            <button draggable={props.offNon}>4</button>
            <button draggable={props.offNon}>5</button>
            <button draggable={props.offNon}>6</button>
            <button draggable={props.offNon}>7</button>
            <button draggable={props.offNon}>8</button>
           </div>
               
        </div>
    )
}

export default PadInput
