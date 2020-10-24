import React, { Component } from 'react'
import DesignBoard from "./DesignBoard"
import PadInput from "./PadInput"
import "./style.css"


class DesignContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
<<<<<<< HEAD
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

    
=======
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
   
    handleToggle=(success)=>{
        console.log("in handleToggle")
        setTimeout(() => { 
            if(success)
          {
              this.setState({
                  reset: false
              })
          }
         }, 500);
    }

>>>>>>> initial-setup
    render() {
       // console.log("in design container")
       
        if(this.state.mode === false)
        {  
            
            return (
            <div>
<<<<<<< HEAD
                
                <div className="top">
                <h1>Design Pad</h1>
=======
            {/*<h2>IN VIEW MODE </h2>*/}

                <div>
>>>>>>> initial-setup
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
<<<<<<< HEAD
                <div className="top">
                <h1>Design Pad</h1>
                <button className="edit-active" onClick ={this.handleEdit}>View</button>
=======
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
>>>>>>> initial-setup
                </div>
                <h2>The App is in edit mode</h2>
                
                
                <div className="board"> 
<<<<<<< HEAD
                <PadInput />
                <DesignBoard mode={this.state.mode} reset={this.state.reset}/>
=======
                <div className = "design-board">
                <DesignBoard mode ={this.state.mode}  reset={this.state.reset}
                 handleToggle={this.handleToggle} 
                 />
                </div>
>>>>>>> initial-setup
                <div>
                    
                </div>
                </div>

            </div>
        )
        }
    }
}

export default DesignContainer
