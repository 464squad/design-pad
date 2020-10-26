import React, { Component } from 'react'
import './DesignBoard.css'

class DesignBoard extends Component {
    constructor(props){
        super(props)
    }


    render() {
        const arr = [0, 1, 2, 3]
        return (
            <div className='padsContainer'>
                {arr.map((value, index) => {
                    return <div className="rectangle" id={`rect${value}`} key={index} 
                    onDrop={this.props.handleDrop} onDragOver={this.props.allowDrop}></div>
                })
                }
            </div>
        )
    }
}

export default DesignBoard;
