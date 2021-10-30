import React from "react"
import DesignBoard from "./DesignBoard"
import PadInput from './PadInput'
import "../css/DesignContainer.css"

class DesignContainer extends React.Component{
     constructor(props){
         super(props)

         this.state = { toggle: "on", color: "black"};
         }
     
         
    onClick = (event) => {
        event.preventDefault();
        
        if (this.state.toggle == "on") {
            this.setState({toggle: "off"})
            this.setState({color: "red"})
           
        }
        else {
            this.setState({toggle: "on"})
            this.setState({color: "black"})
           
        }
    } 


    render(){
        return(
            <div> 
                <h1 > Design Pad </h1>
                <p> drag and drop the numbers to change colors on the Design Pad</p>
                <button onClick = {this.onClick} 
                    style = {{backgroundColor: this.state.color}} > EDIT </button>
                <DesignBoard toggle = {this.state.toggle}/>
                <PadInput/>
                
            </div>
        )
    }

}
export default DesignContainer
