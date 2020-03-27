import React, { Component } from 'react';
import Controller from './Controller.js';
import Greyboxes from './Greyboxes.js'
import styles from './DesignContainer.css';
class DesignContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

      PadInput: ['1','2',
                 '3','4',
                 '5','6',
                 '7','8']
    };
  }

 
  

    
  render() {
    return (
        <div >
        <header>DESIGN PAD</header>
        <button className = "editbutton"> EDIT </button>
        
        <body>
        <Controller/>  
         <Greyboxes /> 
           </body>

         
         </div>
       
      
    );
  }
}



export default DesignContainer;
