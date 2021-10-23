import React from 'react'
import DesignPad from './DesignPad'
import PadInput from './PadInput'
function DesignBoard() {
    return (
        <div className='container'>
            
             <PadInput/> 
            <div className='pads'>
                <DesignPad className='hi' style={{marginLeft:'100px'}}/>
                <DesignPad className='h' />
                <DesignPad className='t' />
                <DesignPad className='f' />
             
            </div>
        </div>
    )
}

export default DesignBoard
