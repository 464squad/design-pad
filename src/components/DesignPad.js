import React from 'react'
import '../styles.css'

export default function DesignPad() {

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

       function allowDrop (event) {
        event.preventDefault();
     }

    return (
        <div>
        <h1 className = "DesignBoard-h1">DESIGN PAD</h1>
            <div className="DesignBoard-container">
                <div id="designBoard_box1" className="DesignBoard-box1" style = {{backgroundColor:""}} onDrop={drop_handler} onDragOver={allowDrop}></div>
                <div id="designBoard_box2" className="DesignBoard-box2" style = {{backgroundColor:""}} onDrop={drop_handler} onDragOver={allowDrop}></div>
                <div id="designBoard_box3" className="DesignBoard-box3" style = {{backgroundColor:""}} onDrop={drop_handler} onDragOver={allowDrop}></div>
                <div id="designBoard_box4" className="DesignBoard-box4" style = {{backgroundColor:""}} onDrop={drop_handler} onDragOver={allowDrop}></div>
            </div>
        </div>
    )
}