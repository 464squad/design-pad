import React, { Component } from 'react';
import PadInput from './PadInput';
import DesignBoard from './DesignBoard';
import '../css/DesignContainer.css';

class DesignContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleEdit: false
    }
  }
  
  toggleEdit = () => {
    this.setState({
      toggleEdit: !this.state.toggleEdit
    })
  }

  render() {
    const { toggleEdit } = this.state;
    const editBtnTF = toggleEdit ? 'editBtnOn' : 'editBtnOff';
    const padInputTF = toggleEdit ? 'padInputTFOn' : 'padInputTFOff';
    return (
      <div>
        <div class="app-header">
          <h1>DESIGN PAD</h1>
          <button className={`editBtn ${editBtnTF}`} onClick={this.toggleEdit}>EDIT</button>
        </div>
        <div class="app-body">
          <PadInput 
            padInputTF={padInputTF}
          />
          <DesignBoard/>
        </div>        
      </div>
    );
  }

}

export default DesignContainer;
