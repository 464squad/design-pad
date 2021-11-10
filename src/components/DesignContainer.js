import React from 'react'
import PadInput from './PadInput';
import DesignBoard from './DesignBoard';

function DesignContainer(){
 
  //BELOW LET'S YOU KNOW THE EDIT BUTTON WORKS
  function myFunction() {
    alert("You clicked the edit button!");
    // THIS SHOULD ALSO HAVE A STATE WHERE IT TURNS IT ON OR OFF WHEN YOU CAN EDIT
  }
  
    return (
      
      <div className="DesignBoardContainer">

        <div className="title">

          <h1>Design Pad!</h1>

              {/* THE GREAT EDIT BUTTON */}
          <button className="EditButton" onClick={myFunction}> EDIT </button>
          
          
        </div>

        <DesignBoard/>
        <PadInput/>
        
        

      </div>
    )
    
  
}

export default DesignContainer