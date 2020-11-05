import React from 'react';
import "../css/DesignPad.css";

class DesignPad extends React.Component {
    state = {
        color: "light-grey"
    };

    onDragged = event => {
        event.preventDefault();
    };

    onDrop = event => {
        event.preventDefault();
        this.setState({ color: event.dataTransfer.getData("color") });
        console.log("Dropped");
    };

    render () {
        return (
            <div 
                className="somePad" 
                onDragged={this.onDragged} 
                onDrop={this.onDrop}
                style={{ backgroundColor: this.state.color }}
                >

                </div>

        );
    }
}

export default DesignPad;
