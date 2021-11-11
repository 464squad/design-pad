import React, {useState} from 'react';

    function PadInput () {
      // TELLS YOU WHAT HAPPENS WHEN U START TO DRAG
      let drag = e =>{
        e.preventDefault();
        e.dataTransfer.setData("text", e.target.className);
        console.log(e.target.className);
      }
      
      
    return (
      
          // This is the containter that hold the Pad Inputs 1-8
         <div className="flex-container">
         
                 {/* Below is the Pad Inputs 1-8 */}
            <div className="red" onDragStart={drag} draggable={true}></div>
            <div className="blue" onDragStart={drag} draggable="true">blue</div>
            <div className="green" onDragStart={drag} draggable="true">green</div>  
            <div className="yellow" onDragStart={drag} draggable="true">yellow</div>
            <div className="purple" onDragStart={drag} draggable="true">purple</div>
            <div className="grey" onDragStart={drag} draggable="true">grey</div>  
            <div className="orange" onDragStart={drag} draggable="true">orange</div>
            <div className="white" onDragStart={drag} draggable="true">white</div>
          
          
          </div>  
    );
  }
    

export default PadInput;