import React, {Component} from 'react';
import DesignBoard from './DesignBoard';
import EditButton from './EditButton';
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
                <PadInput drag = {this.drag}/>
                <DesignBoard drop = {this.drop} allowDrop = {this.allowDrop}/>
                <EditButton/>
            </div>
        );
    }
}

export default DesignContainer;