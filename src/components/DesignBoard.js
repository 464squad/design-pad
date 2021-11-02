import React from 'react'
import DesignPad from './DesignPad'
import PadInput from './PadInput'
function DesignBoard() {
    return (
        <div className='container'>
            
           {/*   <PadInput/>  */}
            <div id='all-pads' className='pads'>
                <div>
                <DesignPad className='hi' style={{marginLeft:'100px'}}/>
                </div>
                <div>
                <DesignPad className='h' />
                </div>
                <div>
                <DesignPad className='t' />
                </div>
                <div>
                <DesignPad className='f' />
                </div>

                
                
                
                
             
            </div>
        </div>
    )
}

export default DesignBoard
