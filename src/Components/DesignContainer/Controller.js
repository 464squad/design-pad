import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Controller extends Component{
    constructor(props) {
        super(props);
        this.state = {
    color: 'green',
    input: 1

          
        };
      }

     
   

      handleDrag =(e, color)=> {
        e.dataTransfer.setData("color", color);
        
      }
      
    
    render(){
        return(

        
        <div className = "rectangle">

        <div className = "container2"> 
       <button id = 'one' className = "button"  draggable="true"  onDragStart="drag(event)">1</button>
        <button id ='2' className = "button" draggable="true" ondragstart="drag(event)">2</button>
       

        
        <button id = '3' className = "button" draggable="true" onDragStart={e=>this.handleDrag(e, 'blue')}>3</button>
        <button id = '4' className = "button" draggable="true" ondragstart="drag(event)">4</button>
        

      
        <button id = '5' className = "button" draggable="true" ondragstart="drag(event)">5</button>
        <button id = '6' className = "button" draggable="true" ondragstart="drag(event)">6</button>
       
        
      
        <button id = '7' className = "button" draggable="true" ondragstart="drag(event)">7</button>
        <button id = '8' className = "button" draggable="true" ondragstart="drag(event)">8</button>
       
       </div>

        </div>
         
        );
  }
}

export default Controller;