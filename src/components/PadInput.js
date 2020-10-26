import React, { Component } from 'react'
import './PadInput.css'

class PadInput extends Component {
    render() {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8]
        const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "cyan"]
        return (
            <div>
                {arr.map((value, index) => {
                    return <button className="inputs" key={index} draggable="true" onDragStart={this.props.handleDrag} id={colors[index]}>{value}</button>
                })
                }
            </div>
        )
    }
}

export default PadInput;
