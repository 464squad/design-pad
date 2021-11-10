import React, {useState} from 'react';

    function PadInput () {
      const color = useState("blue");

      // TELLS YOU WHAT HAPPENS WHEN U START TO DRAG
      let drag = e =>{
        e.preventDefault();
        e.dataTransfer.setData("text", e.target.id);
      }
      
      
    return (
      
          // This is the containter that hold the Pad Inputs 1-8
         <div className="flex-container">
         
                 {/* Below is the Pad Inputs 1-8 */}
            <div className="red" ondragstart={drag} draggable="true">red</div>
            <div className="blue" ondragstart={drag} draggable="true">blue</div>
            <div className="green" ondragstart={drag} draggable="true">green</div>  
            <div className="yellow" ondragstart={drag} draggable="true">yellow</div>
            <div className="purple" ondragstart={drag} draggable="true">purple</div>
            <div className="grey" ondragstart={drag} draggable="true">grey</div>  
            <div className="orange" ondragstart={drag} draggable="true">orange</div>
            <div className="white" ondragstart={drag} draggable="true">white</div>
          
          
          </div>  
    );
  }
    

export default PadInput;