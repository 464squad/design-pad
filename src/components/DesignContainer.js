import React, {Component} from 'react';
import DesignBoard from './DesignBoard';
import EditButton from './EditButton';
import PadInput from './PadInput';
import './DesignContainer.css';


class DesignContainer extends Component {
    
    render() {

        return (
            <div>
                <h1>DESIGN PAD</h1>
                <PadInput/>
                <DesignBoard/>
                <EditButton/>
            </div>
        );
    }
}

export default DesignContainer;