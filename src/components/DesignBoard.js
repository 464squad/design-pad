import React, { Component } from 'react'
import "./style.css"
class DesignPad extends Component{

  
    render(){
        return(
        <div className="square">
             design pads
            </div>
        )
    }
}
 class DesignBoard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             squares: Array(4).fill(null)
        }
    }
    
    renderDesignPad(i)
    {
        return <DesignPad value ={this.state.squares[i]}/>
    }
    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderDesignPad(0)}
                    {this.renderDesignPad(1)}

                </div>
                <div className="board-row">
                {this.renderDesignPad(2)}
                {this.renderDesignPad(3)}

                </div>

                
            </div>
        )
    }
}

export default DesignBoard
