import React from 'react';


class DesignPad extends React.Component {

      state = {
        color: ""
      };

     handleDragOver = event => {
      event.preventDefault();
      event.stopPropagation();
    }

     handleDrop = event => {
      event.preventDefault();
      event.stopPropagation();
      this.setState({color: event.dataTransfer.getData("color")})
    };
    

    render() {
      return (
        <div
            className = "box"
            handleDragOver = {this.handleDragOver}
            handleDrop = {this.handleDrop}
            style={{ backgroundColor: this.state.color }}

        ></div>
    );
    }

  };





export default DesignPad;