import React, {Component} from 'react';
import './PadInput.css';

class PadInput extends Component {
    constructor(props){
        super(props)
        this.state = {
            editMode: true
        }
    }

    edit = event => {
        this.setState({
            editMode: !this.state.editMode
        })
        if(this.state.editMode){
            event.target.style.backgroundColor = "black"
        }
        else{
            event.target.style.backgroundColor = "red"
            
        }
    }

    drag = event => {
        event.dataTransfer.setData("text",event.target.id);
    }

    render() {
        var inputsVisibility = this.state.editMode ? "visible" : "hidden";
        return (
            <div className ="inputsAndButton">
                <button className="editButton" onClick = {this.edit}>EDIT</button>
                <div className="inputContainer inputContainerWrap" style = {{visibility: inputsVisibility}}>
                <div className = "inputs" id = "red" draggable = {true} onDragStart = {this.drag}>1</div>
                <div className = "inputs" id = "orange" draggable = {true} onDragStart = {this.drag}>2</div>
                <div className = "inputs" id = "yellow" draggable = {true} onDragStart = {this.drag}>3</div>
                <div className = "inputs" id = "green" draggable = {true} onDragStart = {this.drag}>4</div>
                <div className = "inputs" id = "teal" draggable = {true} onDragStart = {this.drag}>5</div>
                <div className = "inputs" id = "blue" draggable = {true} onDragStart = {this.drag}>6</div>
                <div className = "inputs" id = "purple" draggable = {true} onDragStart = {this.drag}>7</div>
                <div className = "inputs" id = "pink" draggable = {true} onDragStart = {this.drag}>8</div>
                </div>
            </div>
            
        );
    }
}

export default PadInput;