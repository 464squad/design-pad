import React, { Component } from 'react';
import DesignPanel from '../DesignPanel/DesignPanel';
/*
import Controller from './Controller.js';
import Greyboxes from './Greyboxes.js'
import EditButton from '../EditButton.js'
import styles from './DesignContainer.css';
*/
import './DesignContainer.css';
import DesignBox from '../DesignBox/DesignBox';

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
      <div>
        <div className='DesignContainer__header__container'>
          <header className='DesignContainer__header'>Design Pad</header>
        </div>

        <div className='DesignContainer__button__container'>
          <button
            className='DesignContainer__EditButton'
            onClick={this.updateEditButton}
          >
            Edit
          </button>
        </div>
        {editActive === false ? '' : <DesignPanel />}
        <DesignBox />
      </div>
    );
  }
}

export default DesignContainer;
