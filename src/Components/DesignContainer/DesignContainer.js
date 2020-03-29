import React, { Component } from 'react';
import DesignPanel from '../DesignPanel/DesignPanel';
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
      editActive: false
    };
  }

  updateEditButton = () => {
    const { editActive } = this.state;
    editActive === false
      ? this.setState({ editActive: true })
      : this.setState({ editActive: false });
  };

  /*
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

  render() {
    const { editActive } = this.state;

    return (
      <div className='DesignContainer__container'>
        <header className='DesignContainer__header'>Design Pad</header>
        <button onClick={this.updateEditButton}>Edit</button>
        {editActive === false ? '' : <DesignPanel />}
      </div>
    );
  }
}

export default DesignContainer;
