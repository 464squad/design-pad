import React from 'react';
import DesignBoard from './DesignBoard';
import DesignPad from './DesignPad';
import PadInput from './PadInput';


//In this js file we will pass in PadInput, DesignBoard, and DesignPad file

function DesignContainer(){
    return(
        <div className="container">
            <h1>Design Pad</h1>
            <DesignBoard/>
            <DesignPad/>
            <PadInput/>
            <button>AngiesBranch</button>
        </div>

    );

 
    


}

export default DesignContainer;