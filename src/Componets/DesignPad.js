import React, { Component } from 'react'

export class DesignPad extends Component {
    constructor(props) {
        super(props);
        
       this.state = {
           color: 'grey'
       }
    }

    onDrop = (event) =>  {
        const droppedItem = event.nativeEvent;
        event.preventDefault()
        console.log("Dropped")
        //console.log(event)
        console.log(droppedItem)
        console.log(droppedItem)
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
            className="p-3 border bg-dark"  
            style={{ height: '300px', width: '300px',
            margin: '10px',
            borderRadius: "25px",
            backgroundColor:this.state.color}}> 
                
            </div>
        )
    }
}

export default DesignPad
