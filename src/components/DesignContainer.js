import React, { Component } from 'react'
import DesignBoard from './DesignBoard'
import PadInput from './PadInput'
import './DesignContainer.css'

class DesignContainer extends Component {
    constructor(props){
        super(props);

    }

    allowDrop = ev => {
        ev.preventDefault();
    }

    handleDrop = ev => {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("id")
        console.log("IN HANDLE DROP FUNCTION: " + data)
        ev.target.style.backgroundColor = data
    }

    handleDrag = ev => {
        ev.dataTransfer.setData("id", ev.target.id)
        console.log("IN HANDLE DRAG FUNCTION: " + ev.target.id)
    }

    render() {
        return (
            <div>
                <h1 className='header'>DESIGN PAD</h1>
                <DesignBoard  handleDrop={this.handleDrop} allowDrop={this.allowDrop}/>
                <PadInput handleDrag={this.handleDrag}/>
            </div>
        )
    }
}

export default DesignContainer;
