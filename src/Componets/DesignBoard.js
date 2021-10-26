import React, { Component } from 'react'
import DesignPad from './DesignPad'
export class DesignBoard extends Component {
    render() {
        return (
            <div>
                <DesignPad></DesignPad>
                <DesignPad></DesignPad>
                <DesignPad></DesignPad>
                <DesignPad></DesignPad>
            </div>
        )
    }
}

export default DesignBoard