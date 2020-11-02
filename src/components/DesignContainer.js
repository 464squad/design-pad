import React from 'react';
import DesignBoard from './DesignBoard';
import DesignPad from './DesignPad';
import PadInput from './PadInput';
import './design.css'

//In this js file we will pass in PadInput, DesignBoard, and DesignPad file

function DesignContainer(){
    return(
        <div className="container">
            <DesignBoard/>
            <DesignPad/>
            <PadInput/>
            
        </div>

    );

 
    


}

export default DesignContainer;