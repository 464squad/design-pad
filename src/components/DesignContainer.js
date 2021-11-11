import React, {useState} from 'react'
import PadInput from './PadInput';
import DesignBoard from './DesignBoard';

function DesignContainer(){
  const [isOn, currentState] = useState("on");

  //BELOW LET'S YOU KNOW THE EDIT BUTTON WORKS
  function myFunction() {
    alert("You clicked the edit button!");
    // THIS SHOULD ALSO HAVE A STATE WHERE IT TURNS IT ON OR OFF WHEN YOU CAN EDIT
    
    // TURNS THE EDIT BUTTON "ON" AND "OFF"
    if(isOn == "on"){
      currentState("off");
    }else{
      currentState("on");
    }


  }
  
    return (
      
      <div className="DesignBoardContainer">

        <div className="title">

          <h1>Design Pad!</h1>

              {/* THE GREAT EDIT BUTTON */}
          <button className="EditButton" onClick={myFunction}> EDIT {isOn}</button>
          
          
        </div>

        <DesignBoard/>
        <PadInput/>
        
        

      </div>
    )
    
  
}

export default DesignContainer