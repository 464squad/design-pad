import React from 'react';
import PadInput from './PadInput';
import DesignBoard from './DesignBoard';
import '../designboard.css';

class DesignContainer extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            color: 'orange'
        }
    }
    render() {

        return(
            <div className = "masterContainer">
                <h1>Design Pad</h1>
                    <PadInput />
                    <DesignBoard />
            </div>
        );
    }
}

export default DesignContainer;