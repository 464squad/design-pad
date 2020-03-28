import React, { Component } from 'react';
import Controller from './Controller.js';
import Greyboxes from './Greyboxes.js'
import EditButton from '../EditButton.js'
import styles from './DesignContainer.css';

class DesignContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
 
  

    
  render() {
    return (
        <div >
        <header>DESIGN PAD</header>
        <EditButton/>
        
        <body>
        <Controller/>  
         <Greyboxes /> 
           </body>

         
         </div>
       
      
    );
  }
}



export default DesignContainer;
