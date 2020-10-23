import React, { Component } from 'react'
import DesignBoard from "./DesignBoard"
import PadInput from "./PadInput"
import "./style.css"


class DesignContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             mode: false ,   /*not in edit mode*/ 
             reset: false
        }
    }
    handleEdit=()=>{
       this.setState(prevState =>({
           mode: !prevState.mode
       }))
       if(this.state.mode === false)
       {
           this.setState({
               reset: false
           }) 
       }
      
   
    }
    
    handleReset=()=>{
      
        //console.log("in handlereset")
         this.setState(prevState =>({
            reset: !prevState.reset
        }))
       
     
       
       
       
        

    }
    render() {
        console.log("in design container")
        if(this.state.mode === false)
        {  
            
            return (
            <div>
               {/*<h2>IN VIEW MODE </h2>*/}

                <div>
                <button className= "button" onClick={this.handleEdit}>Edit</button>
                </div>

                <div className="board"> 
                <div className = "design-board">
                <DesignBoard  mode={this.state.mode}/>
                </div>
                </div>

                </div>)
        }
        return (
            
            <div>
               {/*<h2>IN EDIT MODE</h2>*/}

                <div>
                <button className="edit-active" onClick ={this.handleEdit}>Edit</button>
                </div>
                <div>
                    <button id="resbtn"  
                    className={`${this.state.reset ? "edit-active" : "button"}`} 
                    onClick={this.handleReset}>Reset</button>
                </div>

                <div>
                <PadInput/>
                </div>
                
                <div className="board"> 
                <div className = "design-board">
                <DesignBoard mode ={this.state.mode}  reset={this.state.reset}/>
                </div>
                <div>
                    
                </div>
                </div>

            </div>
        )
    }
}

export default DesignContainer
