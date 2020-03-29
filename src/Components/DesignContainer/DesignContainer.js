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
      editActive: false,
      activePanelColor: '',
      btnColor: ''
    };
    this.updatebtnColor = this.updatebtnColor.bind(this);
  }

  updateEditButton = event => {
    const editBtn = document.getElementById(event.target.id).style;
    const { editActive } = this.state;
    if (editActive === false) {
      this.setState({ editActive: true, activePanelColor: 'cyan' });
      editBtn.backgroundColor = 'red';
    } else {
      this.setState({ editActive: false, activePanelColor: '908cff' });
      editBtn.backgroundColor = 'black';
    }
  };

  updatebtnColor = btnColor => {
    this.setState({ btnColor });
  };

  render() {
    const { editActive, btnColor, activePanelColor } = this.state;
    const { updatebtnColor } = this;

    return (
      <div>
        <div className='DesignContainer__header__container'>
          <header className='DesignContainer__header'>Design Pad</header>
        </div>
        <div className='DesignContainer__button__container'>
          <button
            id='edit_btn'
            className='DesignContainer__EditButton'
            onClick={this.updateEditButton}
          >
            Edit
          </button>
        </div>
        <div className='BoxesAndPanel__container'>
          {editActive === false ? (
            ''
          ) : (
            <DesignPanel
              changePanelColor={activePanelColor}
              updatebtnColor={updatebtnColor}
            />
          )}
          <DesignBox color={btnColor} />
        </div>
      </div>
    );
  }
}

export default DesignContainer;
