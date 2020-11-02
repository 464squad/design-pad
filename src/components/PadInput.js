import React from 'react'
import '../styles.css'

export default function PadInput(props) {
    
    //Hides the PadInput when the edit mode is on
    //let customStyle = {display:""};
   // props.editMode ? customStyle.display="grid" : customStyle.display="none";

    
    function dragStartHandler(event) {
        //console.log("dragStart");
        //console.log(event.target);

        //Grab the color of the pad input being dragged
        const padInputColor = event.target.style.backgroundColor;

        // Set the drag's format and data. The data being passed is the Pad Input color. 
        event.dataTransfer.setData("text", padInputColor);
    }

    return (
        <div>
        <h1 id = "PadInput-h1">Design Input</h1>
            <div className = "PadInput-container">
                <div id = "pad_Box1" className = "PadInput-box1" style = {{backgroundColor: "yellow"}} draggable={props.editMode} onDragStart={dragStartHandler}>1 </div>
                <div id = "pad_Box2" className = "PadInput-box2" style = {{backgroundColor: "blue"}} draggable={props.editMode} onDragStart={dragStartHandler}>2</div>
                <div id = "pad_Box3" className = "PadInput-box3" style = {{backgroundColor: "green"}} draggable={props.editMode} onDragStart={dragStartHandler}>3</div>
                <div id = "pad_Box4" className = "PadInput-box4" style = {{backgroundColor: "red"}} draggable={props.editMode} onDragStart={dragStartHandler}>4</div>
                <div id = "pad_Box5" className = "PadInput-box5" style = {{backgroundColor: "pink"}} draggable={props.editMode} onDragStart={dragStartHandler}>5</div>
                <div id = "pad_Box6" className = "PadInput-box6" style = {{backgroundColor: "indigo"}} draggable={props.editMode} onDragStart={dragStartHandler}>6</div>
                <div id = "pad_Box7" className = "PadInput-box7" style = {{backgroundColor: "white"}} draggable={props.editMode} onDragStart={dragStartHandler}>7</div>
                <div id = "pad_Box8" className = "PadInput-box8" style = {{backgroundColor: "orange"}} draggable={props.editMode} onDragStart={dragStartHandler}>8</div>
            </div>
        </div>
    )
}
