import React, { Component } from 'react'
import DesignBoard from './DesignBoard'
import PadInput from './PadInput'
import './DesignContainer.css'

class DesignContainer extends Component {
    render() {
        return (
            <div>
                <h1 className='header'>DESIGN PAD</h1>
                <DesignBoard/>
                <PadInput/>
            </div>
        )
    }
}

export default DesignContainer;
