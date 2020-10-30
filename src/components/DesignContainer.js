import React, {Component} from 'react';
import DesignBoard from './DesignBoard';
import PadInput from './PadInput';
import './DesignContainer.css';

class DesignContainer extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <h1>DESIGN PAD</h1>
                <PadInput/>
                <DesignBoard/>
            </div>
        );
    }
}

export default DesignContainer;