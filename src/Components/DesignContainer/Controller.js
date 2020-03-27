import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Controller extends Component{
    constructor(props) {
        super(props);
        this.state = {
    
          PadInput: ['1','2',
                     '3','4',
                     '5','6',
                     '7','8']
        };
      }

   

       onDragStart(event) {
        event
          .dataTransfer
          .setData('text/plain', event.target.id);
          
          event
          .currentTarget
          .style
          .backgroundColor = 'yellow';
      }
    
    render(){
        return(

        <div>
        <div className = "rectangle">

        <div className = "container2"> 
       <button id = '1' className = "button" draggable="true" ondragstart='onDragStart(event)'>1</button>
        <button id ='2' className = "button" draggable="true" ondragstart="drag(event)">2</button>
       

        
        <button id = '3' className = "button" draggable="true" ondragstart="drag(event)">3</button>
        <button id = '4' className = "button" draggable="true" ondragstart="drag(event)">4</button>
        

      
        <button id = '5' className = "button" draggable="true" ondragstart="drag(event)"> 5</button>
        <button id = '6' className = "button" draggable="true" ondragstart="drag(event)">6</button>
       
        
      
        <button id = '7' className = "button" draggable="true" ondragstart="drag(event)">7</button>
        <button id = '8' className = "button" draggable="true" ondragstart="drag(event)">8</button>
       
       </div>
        </div>
         </div>
        );
  }
}

export default Controller;