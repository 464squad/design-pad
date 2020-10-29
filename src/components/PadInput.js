import React, {Component} from 'react';
import './PadInput.css';

class PadInput extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="inputContainer inputContainerWrap">
                <div className = "inputs" id = "red" draggable = {true} onDragStart = {this.drag}>1</div>
                <div className = "inputs" id = "orange" draggable = {true} onDragStart = {this.drag}>2</div>
                <div className = "inputs" id = "yellow" draggable = {true} onDragStart = {this.drag}>3</div>
                <div className = "inputs" id = "green" draggable = {true} onDragStart = {this.drag}>4</div>
                <div className = "inputs" id = "teal" draggable = {true} onDragStart = {this.drag}>5</div>
                <div className = "inputs" id = "blue" draggable = {true} onDragStart = {this.drag}>6</div>
                <div className = "inputs" id = "purple" draggable = {true} onDragStart = {this.drag}>7</div>
                <div className = "inputs" id = "pink" draggable = {true} onDragStart = {this.drag}>8</div>
            </div>
        );
    }
}

export default PadInput;