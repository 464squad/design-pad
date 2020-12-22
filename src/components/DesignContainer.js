import React from 'react';
import DesignPad from './DesignPad';
import PadInput from './PadInput';
import './design.css'

//In this js file we will pass in PadInput, DesignBoard, and DesignPad file

function DesignContainer(){
    return(
        <div className="container">
        <div className= "header">
            <h1 className="container-header">Design Pad</h1>
            <button className="container-button">Edit</button>
        </div>
        <div className="designBoard" >
            <DesignPad/>   
            <PadInput/>
        </div>   
        </div>

    );

 
    


}

export default DesignContainer;