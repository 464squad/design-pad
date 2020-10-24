import React, { Component } from 'react'
import DesignBoard from "./DesignBoard"
import PadInput from "./PadInput"
import "./style.css"
class DesignContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             mode: false,    /*not in edit mode*/ 
             reset: false
        }
    }
    handleEdit=()=>{
       this.setState(prevState =>({
           mode: !prevState.mode,
           
       }))
    }

    handleReset = () => {
        this.setState(prevState => ({
            reset: !prevState.reset
        }))
    }

    
    render() {
       // console.log("in design container")
       
        if(this.state.mode === false)
        {  
            
            return (
            <div>
                
                <div className="top">
                <h1>Design Pad</h1>
                <button className= "button" onClick={this.handleEdit}>Edit</button>
                </div>
                <h2>The App is in view mode</h2>
                <div className="board"> 
               <PadInput />
                <DesignBoard mode={this.state.mode} reset={this.state.reset}/>
                </div>

            </div>)
        }else{
        return (
            
            <div>
                <div className="top">
                <h1>Design Pad</h1>
                <button className="edit-active" onClick ={this.handleEdit}>View</button>
                </div>
                <h2>The App is in edit mode</h2>
                
                
                <div className="board"> 
                <PadInput />
                <DesignBoard mode={this.state.mode} reset={this.state.reset}/>
                <div>
                    
                </div>
                </div>

            </div>
        )
        }
    }
}

export default DesignContainer
