import React, { Component } from 'react'
import DesignBoard from "./DesignBoard"
import PadInput from "./PadInput"
import "./style.css"
class DesignContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             mode: false    /*not in edit mode*/ 
        }
    }
    handleEdit=()=>{
       this.setState(prevState =>({
           mode: !prevState.mode
       }))
    }
    render() {
        console.log("in design container")
        if(this.state.mode === false)
        {  
            
            return (
            <div>
                <h2>The App is in view mode</h2>

                <div>
                <button className= "button" onClick={this.handleEdit}>Edit</button>
                </div>

                <div className="board"> 
                <div className = "design-board">
                <DesignBoard />
                </div>
                </div>

                </div>)
        }
        return (
            
            <div>
                <h2>The App is in edit mode</h2>

                <div>
                <button className="edit-active" onClick ={this.handleEdit}>Edit</button>
                </div>

                <div>
                <PadInput/>
                </div>
                
                <div className="board"> 
                <div className = "design-board">
                <DesignBoard />
                </div>
                </div>

            </div>
        )
    }
}

export default DesignContainer
