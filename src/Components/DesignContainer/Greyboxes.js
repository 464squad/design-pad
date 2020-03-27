import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Greyboxes extends Component{

        onDragOver(event) {
                event.preventDefault();
              }
              
              onDrop(event) {
                const id = event
                  .dataTransfer
                  .getData('text');
              
                const draggableElement = document.getElementById(id);
                const dropzone = event.target;
                
                dropzone.appendChild(draggableElement);
              
                event
                  .dataTransfer
                  .clearData();
              }

    
render(){
return(


<div>
        <div class = "container" > 
        <div className = "rectangle2" ondragover='onDragOver(event);' ondrop='onDrop(event);'/>
       <div className = "rectangle2"/>
        </div>
        <div class = "container"> 
        <div className = "rectangle2"/>
       <div className = "rectangle2"/>
        </div>
       </div>
);
}
}

export default Greyboxes;