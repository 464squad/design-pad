import React from "react";
import  './PadInput.css'
import DesignBoard from "../DesignBoard";


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
           
      
        if(this.state.colors[0]){
            e.dataTransfer.setData("colors",this.state.colors)
            this.setState({color: "Khaki"})
            console.log('Dragged color Khaki!')
          }else if(this.state.colors[1]){
              console.log('Dragged color coral!')
              this.setState({color: "coral"})
              e.dataTransfer.setData("colors",this.setState)
          }else if(this.state.colors[2]){
              console.log('Dragged color maroon!')
              this.setState({color: "maroon"})
              e.dataTransfer.setData("colors",this.state.colors)
          }else if(this.state.colors[3] ){
              console.log('Dragged color salmon!')
              this.setState({color: "salmon"})
              e.dataTransfer.setData("colors",this.state.colors)
          }else if(this.state.colors[4] ){
              console.log('Dragged color SlateBlue!')
              this.setState({color: "slateblue"})
              e.dataTransfer.setData("colors",this.state.colors)
          }else if(this.state.colors[5] ){
              console.log('Dragged color teal!')
              this.setState({color: "teal"})
              e.dataTransfer.setData("colors",this.state.colors)
          }else if(this.state.colors[6] ){
              console.log('Dragged color olive!')
              this.setState({color: "olive"})
              e.dataTransfer.setData("colors",this.state.colors)
          }else{
              console.log('Dragged color silver!')
              this.setState({color: "silver"})
              e.dataTransfer.setData("colors",this.state.colors)
          }
    }
 
    handleDrop = (e) => {
        e.preventDefault();
        console.log("Dropped!")
        var data = e.dataTransfer.getData('clrs');
       e.target.appendChild(document.getElementById(data));
      }

    render(){
        return(
          <div className ='buttonList'>
          {this.state.colors.map((input,index) => (
      <div className='bt' key={input.id}>
      <button  draggable="true" onDragStart={this.handleDrag} onDrop={this.handleDrop}>{input.id}</button> 
      </div> ))}
     
      <DesignBoard clr={this.state.colors} />

           </div>
        )
    }
    
}
export default PadInput;