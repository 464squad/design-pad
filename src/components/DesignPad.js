import React from 'react'
import {useState} from 'react'
import './DesignPad.css'
function DesignPad() {
    
    // you could use hooks(useState) or convert this into a class extend Component so you can use this.state like how the prof flowers taught but keep the same div and classname
    //need to create a drop to transferdata to the pad link if you need help https://www.pluralsight.com/guides/drag-and-drop-react-components  
    // https://www.youtube.com/watch?v=-MfTv5VRM0A https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
    return (
        <div className='right-box'>
            <div className='pad' 
            style={{backgroundColor: 'lightgrey'}}
            
            >
            </div>

        </div>

            
        
    )
}

export default DesignPad
{/* <div className='right-box'>
            <div className='pad' style={{backgroundColor: colors}}>
            </div>

        </div> */}