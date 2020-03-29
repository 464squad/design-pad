import React, { Component } from 'react';
<<<<<<< HEAD
import DesignPanel from '../DesignPanel/DesignPanel';
=======
/*
import Controller from './Controller.js';
import Greyboxes from './Greyboxes.js'
import EditButton from '../EditButton.js'
import styles from './DesignContainer.css';
*/
import './DesignContainer.css';

>>>>>>> 4f6d6642e41d1602eaf41cf59f664923cf1dd5f8

class DesignContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      editActive: false
    };
=======

    }
>>>>>>> 4f6d6642e41d1602eaf41cf59f664923cf1dd5f8
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





    )
  }
}



export default DesignContainer;
