import React, { Component } from 'react'
import PadInput from './PadInput'
import DesignBoard from './DesignBoard'
export class DesignContainer extends Component {
    
    render() {
        return (
            <div>
                <div>
                Design Pad
                </div>
                <button>Edit</button>
                <PadInput>

                </PadInput>
                <DesignBoard>

                </DesignBoard>
            </div>
        )
    }
}

export default DesignContainer
