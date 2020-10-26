import React, { Component } from 'react'
import './PadInput.css'

class PadInput extends Component {
    render() {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8]
        return (
            <div>
                {arr.map((value, index) => {
                    return <button className="inputs" key={index}>{value}</button>
                })
                }
            </div>
        )
    }
}

export default PadInput;
