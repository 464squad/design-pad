import React, { Component } from 'react'
import DesignBoard from "./DesignBoard"
import PadInput from "./PadInput"
import "./style.css"
class DesignContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mode: false ,   /*not in edit mode*/
            reset: false    /*reset is not active*/
        }
    }
    handleEdit=()=>{
        this.setState(prevState =>({
        mode: !prevState.mode
        }))
        if(this.state.mode === false)  /*if edit is not activated, reset is also deactive*/
        {
            this.setState({
            reset: false
            }) 
        }
    }

    handleReset=()=>{
        this.setState(prevState =>({
            reset: !prevState.reset
        }))
    }
    handleToggle=(success)=>{
        setTimeout(() => { 
            if(success)	 {  /*once reset is done successfully, deactive reset in half a sec */
                this.setState({	          
                    reset: false	   
                })	             
          }
           }, 500);
    }
  
      render() {
        if(this.state.mode === false)
        {   
            return (    /**render edit button, design board in view mode */
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
        return (     /**render edit button, padinput and design board in edit mode */

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
                <DesignBoard mode ={this.state.mode}  reset={this.state.reset} handleToggle={this.handleToggle} />
                </div>
                </div>

            </div>
        )
    }
}
export default DesignContainer