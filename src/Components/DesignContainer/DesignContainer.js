import React, { Component } from 'react';
/*
import Controller from './Controller.js';
import Greyboxes from './Greyboxes.js'
import EditButton from '../EditButton.js'
import styles from './DesignContainer.css';
*/
import './DesignContainer.css';


class DesignContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
 
  

    
  render() {
    return (
      /*
        <div >
        <header>DESIGN PAD</header>
        <EditButton/>
        
        <body>
        <Controller/>  
         <Greyboxes /> 
           </body>

         
         </div>
       
       */

      <div className='DesignContainer__container'>
        <header className='DesignContainer__header'>Design Pad</header>
      </div>
    );
  }
}



export default DesignContainer;
