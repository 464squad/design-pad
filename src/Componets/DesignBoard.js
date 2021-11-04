import React, { Component } from 'react'
import DesignPad from './DesignPad'
export class DesignBoard extends Component {

    render() {
        
        return (
            <div className="container col-12">
                <div className="row justify-content-evenly">
                    <div className="col-6 align-self-center">
                        <DesignPad/>
                    </div>
                    <div className="col-6 align-self-center">
                        <DesignPad/>
                    </div>
                </div>
                
                <div className="row justify-content-evenly">
                    <div className="col-6 align-self-center">
                        <DesignPad/>
                    </div>
                    <div className="col-6 align-self-center">
                        <DesignPad/>
                    </div>
                </div>
            </div>
        )
    }
}

export default DesignBoard