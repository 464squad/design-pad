import React, {useState} from 'react';
import DesignPad from './DesignPad';
import PadInput from './PadInput';
import './design.css'

//In this js file we will pass in PadInput, DesignBoard, and DesignPad file

function DesignContainer(){
  const [isEditable, setIsEditable] = useState(false);

    return(
        <div className="container">
        <div className= "header">
            <h1 className="container-header">Design Pad</h1>
            <button className="container-button"
            onClick={() => setIsEditable(!isEditable)}
            >Edit</button>
        </div>
        <div className="designBoard" >
          <PadInput
          edit = {isEditable}
          />
          <DesignPad/>   
            
        </div>   
        </div>

    );

 
    


}

export default DesignContainer;