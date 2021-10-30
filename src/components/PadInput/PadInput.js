import React from "react";
import  './PadInput.css'
import DesignPad from "../DesignPad/DesignPad";


class PadInput extends React.Component{
    constructor(props){
        super(props)
        this.state={colors:[
            {color: 'Khaki'},
            {color: 'coral'},
            {color: 'maroon'},
            {color: 'salmon'},
            {color: 'slateblue'},
            {color: 'teal'},
            {color: 'olive'},
            {color: 'silver'}]
            
          }
    }

    allowDrop=(e) =>{
        e.preventDefault();
      }
      
    handleDrag = (e) =>{
           
      
        if(e.target.id === '1'){
            this.setState({color:"khaki"})
            console.log('Dragged!')
            e.dataTransfer.setData("colors",this.state.colors[0])
            console.log(this.state.colors[0])
       }else if(e.target.id === '2'){
           this.setState({color:"coral"})
           console.log('Dragged!')
           e.dataTransfer.setData("colors",this.state.colors[1])
           console.log(this.state.colors[1])
       
       }else if(e.target.id === '3'){
           this.setState({color:"maroon"})
           console.log('Dragged!')
           e.dataTransfer.setData("colors",this.state.colors[2])
           console.log(this.state.colors[2])
       }else if(e.target.id === '4'){
           this.setState({color:"salmon"})
           console.log('Dragged!')
           e.dataTransfer.setData("colors",this.state.colors[3])
           console.log(this.state.colors[3])
       
       }else if(e.target.id === '5'){
           this.setState({color:"slateblue"})
           console.log('Dragged!')
           e.dataTransfer.setData("colors",this.state.colors[4])
           console.log(this.state.colors[4])
       
       }else if(e.target.id === '6'){
           this.setState({color:"teal"})
           console.log('Dragged!')
           e.dataTransfer.setData("colors",this.state.colors[5])
           console.log(this.state.colors[5])
       
       }else if(e.target.id === '7'){
           this.setState({color:"olive"})
           console.log('Dragged!')
           e.dataTransfer.setData("colors",this.state.colors[6])
           console.log(this.state.colors[6])
       
       }else if(e.target.id === '8'){
           this.setState({color:"silver"})
           console.log('Dragged!')
           e.dataTransfer.setData("colors",this.state.colors[7])
           console.log(this.state.colors[7])
       
       }
     
    }
 
    handleDrop = (e) => {
        e.preventDefault()
        console.log('Dropped!')
        var data = e.dataTransfer.getData("colors")
        e.target.appendChild(document.getElementById(data))
        
      }

    render(){
        return(
        
            <div className ='buttonList'>
               
            <button id="1" draggable = "true" onDragStart={ (e)=>this.handleDrag(e)} onDragOver={this.allowDrop} onDrop={this.handleDrop}>1</button> 
            <button id = '2'draggable = "true"  onDragStart={(e)=>this.handleDrag(e)}  onDrop={this.handleDrop}> 2 </button> 
            <div className="divider"></div>
            <button id= '3' draggable = "true" onDragStart={(e)=>this.handleDrag(e)} onDragOver={this.allowDrop} onDrop={this.handleDrop}> 3 </button> 
            <button  id= '4' draggable = "true" onDragStart={(e)=>this.handleDrag(e)} onDragOver={this.allowDrop} onDrop={this.handleDrop}> 4 </button> 
            <div className="divider"></div>
            <button id= '5' draggable = "true" onDragStart={(e)=>this.handleDrag(e)} onDragOver={this.allowDrop}onDrop={this.handleDrop}> 5 </button> 
            <button  id= '6' draggable = "true" onDragStart={(e)=>this.handleDrag(e)} onDragOver={this.allowDrop}onDrop={this.handleDrop}> 6 </button> 
            <div className="divider"></div>
            <button  id= '7' draggable = "true" onDragStart={(e)=>this.handleDrag(e)} onDragOver={this.allowDrop}onDrop={this.handleDrop}> 7 </button> 
            <button  id= '8' draggable = "true" onDragStart={(e)=>this.handleDrag(e)} onDragOver={this.allowDrop}onDrop={this.handleDrop}> 8 </button> 

      <DesignPad onDragOver={this.allowDrop} onDrop={this.handleDrop} clr={this.state.colors} />

           </div>
        )
    }
    
}
export default PadInput;