import React from 'react'
import '../styles.css'

export default function DesignPad(props) {

    //console.log(props.editMode);

    function drop_handler(event) {
        console.log("Dropped");

        // Get the data, which is the background color of any of the pad inputs that was dragged
        const data = event.dataTransfer.getData("text");
        //console.log('data being received is --->'+ data);

        //Set the drop target's background color to the color passed from the PadInput;
        event.target.style.backgroundColor = data;

        // Clear the drag data cache (for all formats/types)
        event.dataTransfer.clearData();
    }

    function allowDrop(event) {
        event.preventDefault();
    }

    const resetDesignPad = () => {
        const boxes = document.querySelectorAll(".DesignPad");
        boxes.forEach((box) => {
            box.style.backgroundColor = "";
        })
    }

    return (
        <div>
            <h1 className="DesignPad-h1">{props.editMode ? "DESIGN PAD (Edit Mode)" : "DESIGN PAD (View Mode)"}</h1>
            <div className="DesignPad-container">
                <div id="designPad_box1" className="DesignPad" style={{ backgroundColor: "" }} onDrop={drop_handler} onDragOver={allowDrop}></div>
                <div id="designPad_box2" className="DesignPad" style={{ backgroundColor: "" }} onDrop={drop_handler} onDragOver={allowDrop}></div>
                <div id="designPad_box3" className="DesignPad" style={{ backgroundColor: "" }} onDrop={drop_handler} onDragOver={allowDrop}></div>
                <div id="designPad_box4" className="DesignPad" style={{ backgroundColor: "" }} onDrop={drop_handler} onDragOver={allowDrop}></div>
            </div>

            {/** Reset Button when clicked resets the design board **/}/
            <button className="ResetButton" onClick={resetDesignPad}>RESET</button>

        </div>
    )
}