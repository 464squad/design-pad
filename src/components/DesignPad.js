import React from 'react';
import './design.css';

class DesignPad extends React.Component{
    state = {
        color: "grey"
      };
    
      handleDragOver = e => {
        e.preventDefault();
      };
    
      handleDrop = e => {
        e.preventDefault();
        const color = e.dataTransfer.getData("color");
        this.setState({ color });
      };
    
      render() {
        return (
          <div
            className="pad-container"
            style={{ backgroundColor: this.state.color , height:"200px", width: "200px", marginLeft: "100px" }}
            onDragOver={this.handleDragOver}
            onDrop={this.handleDrop}
          ></div>
        );
      }
}

export default DesignPad;