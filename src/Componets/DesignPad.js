import React, { Component } from 'react'

export class DesignPad extends Component {
    constructor(props) {
        super(props);
        
       this.state = {
           color: 'grey'
       }
    }

    onDrop = (event) =>  {
        event.preventDefault()
        const transfer = event.dataTransfer;
        const color = transfer.getData("color")
        console.log("color: " + color)
        this.setState({color: color})
        this.forceUpdate()
    }

    onDragEnter = event => {
        event.preventDefault()
        // Bring the endzone back to normal, maybe?
    };

    onDragLeave = event => {
        event.preventDefault()
        // Bring the endzone back to normal, maybe?
    };

    onDragOver = (event) => {
        event.preventDefault()
        //console.log("Over")
    }

    render() {
        return (
            <div 
            onDrop={this.onDrop} 
            onDragOver={this.onDragOver} 
            onDragEnter={this.onDragEnter}
            onDragLeave={this.onDragLeave}
            className="p-3 border"  
            style={{ height: '200px', width: '200px',
            margin: '10px',
            borderRadius: "25px",
            backgroundColor:this.state.color}}> 
                
            </div>
        )
    }
}

export default DesignPad
