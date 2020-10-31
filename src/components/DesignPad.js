import React from 'react'
import './DesignPad.css';

class DesignPad extends React.Component{
    state = {
        color: "grey"
    };

    onDragOver = event => {
        event.preventDefault();
    };

    onDrop = event => {
        event.preventDefault();
        this.setState({color: event.dataTransfer.getData("color")});
    }

    render() {
        return (
            <div className="Pad" onDragOver={this.onDragOver} onDrop={this.onDrop} style={{backgroundColor: this.state.color}}>  
            </div>
        );
    }
}   
export default DesignPad;