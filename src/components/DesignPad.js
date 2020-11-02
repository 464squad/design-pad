import React from 'react'
import '../styles.css'

export default function DesignPad(props) {

    function drop_handler(ev) {
        console.log("Dropped");
        ev.preventDefault();

        // Get the data, which is the background color of the drop target
        var data = ev.dataTransfer.getData("text");
        //console.log('data being received is --->'+ data);

        //cset the drop target's background color to the color passed from the PadInput;
        ev.target.style.backgroundColor = data;

        // Clear the drag data cache (for all formats/types)
        ev.dataTransfer.clearData();
       }

       function allowDrop (ev) {
        ev.preventDefault();
     }

    return (
        <div>
        <h1 className = "DesignBoard-h1">DESIGN PAD</h1>
            <div className="DesignBoard-container">
                <div id="designBoard_box1" className="DesignBoard-box1" style = {{backgroundColor:""}} onDrop={drop_handler} onDragOver={allowDrop}></div>
                <div id="designBoard_box2" className="DesignBoard-box2"></div>
                <div id="designBoard_box3" className="DesignBoard-box3"></div>
                <div id="designBoard_box4" className="DesignBoard-box4"></div>
            </div>
        </div>
    )
}