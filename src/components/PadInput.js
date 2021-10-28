import React from "react";
import DesignPad from "./DesignPad";

//const clrs = ['khaki','coral','maroon', 'salmon','slateblue','teal','olive','silver']

class PadInput extends React.Component{
    constructor(props){
        super(props)
        this.state={colors:[
        {id: "1",color:"khaki"},
        {id: "2",color:"coral"},
        {id: "3",color:"maroon"},
        {id: "4",color:"salmon"},
        {id: "5",color:"slateblue"},
        {id: "6",color:"teal"},
        {id: "7",color:"olive"},
        {id: "8",color:"silver"}]}
    }

    allowDrop=(e) =>{
        e.preventDefault();
      }
      
    handleDrag = (e) =>{
        e.preventDefault()
        console.log("Dragged!")
       // e.dataTransfer.setdata('colors', this.state.colors)
    }
 
    handleDrop = (e) => {
        e.preventDefault();
        console.log("Dropped!")
        //var data = e.dataTransfer.getData('clrs');
       // e.target.appendChild(document.getElementById(data));
      }

    render(){
        return(
            <div className = "list">
              {this.state.colors.map((input,index) => (
       <li key={input.id}>  
             <button  draggable="true" onDragStart={this.handleDrag} onDrop={this.handleDrop}>{input.id}</button> 
       </li> ))}
               
      {/* <DesignPad clr={this.state.colors} />*/}
            </div>
        )
    }
    
}
export default PadInput;