import React from 'react'
import './PadInput.css'
function PadInput(props) {
    // const dragStart = event =>{
        
    //     event.dataTransfer.setData('colors', 'black')
       
    // }
    const dragOver=event=>{
        event.preventDefault();
        event.stopPropagation();

    }
     // you need to create a drag start for each button  and dragover
   // if you need help https://www.pluralsight.com/guides/drag-and-drop-react-components  
    // https://www.youtube.com/watch?v=-MfTv5VRM0A https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
    return (
        <div className='left-box'>
           <div className='inner-box'>
            <button draggable={props.offNon} onDragStart={event =>{event.dataTransfer.setData('gif', 'https://media.giphy.com/media/9fulYnA7MR1oQ/giphy.gif')} }onDragOver={dragOver}>1</button>
            <button draggable={props.offNon} onDragStart={event =>{event.dataTransfer.setData('gifs', 'https://media.giphy.com/media/5ki43KG78VCLFf19QA/giphy.gif')} }onDragOver={dragOver}>2</button>
            <button draggable={props.offNon} onDragStart={event =>{event.dataTransfer.setData('gifs', 'https://media.giphy.com/media/u8zWzulxIVFt02FpxJ/giphy.gif')} }onDragOver={dragOver}>3</button>
            <button draggable={props.offNon} onDragStart={event =>{event.dataTransfer.setData('gifs', 'https://media.giphy.com/media/FAFo1M7EC4gRZ4HETH/giphy.gif')} }onDragOver={dragOver}>4</button>
            <button draggable={props.offNon} onDragStart={event =>{event.dataTransfer.setData('colors', 'purple')} }onDragOver={dragOver}>5</button>
            <button draggable={props.offNon} onDragStart={event =>{event.dataTransfer.setData('colors', 'yellow')} }onDragOver={dragOver}>6</button>
            <button draggable={props.offNon} onDragStart={event =>{event.dataTransfer.setData('colors', 'green')} }onDragOver={dragOver}>7</button>
            <button draggable={props.offNon} onDragStart={event =>{event.dataTransfer.setData('colors', 'lightgrey')} }onDragOver={dragOver}>8</button>
           </div>
               
        </div>
    )
}

export default PadInput
