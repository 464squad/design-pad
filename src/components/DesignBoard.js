import React, {Component} from 'react';
import './DesignBoard.css';
import DesignPad from './DesignPad';

class DesignBoard extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="boardContainer boardContainerWrap">
                <div className = "boxes" id = "box1" onDrop = {this.drop} onDragOver = {this.allowDrop}></div>
                <div className = "boxes" id = "box2" onDrop = {this.drop} onDragOver = {this.allowDrop}></div>
                <div className = "boxes" id = "box3" onDrop = {this.drop} onDragOver = {this.allowDrop}></div>
                <div className = "boxes" id = "box4" onDrop = {this.drop} onDragOver = {this.allowDrop}></div>
            </div>
        );
    }
}

export default DesignBoard;