import React from 'react';
import './editButton.css';

class EditButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inEditMode: false,
      button_clickability: 'editButton_enabled'
    }
  }

  changeEditMode = () => {
    if (this.state.inEditMode === true){
      // flip the states
      this.setState({inEditMode: false, button_clickability:'editButton_enabled'})
    }
    else (
      this.setState({inEditMode: true, button_clickability:'editButton_disabled'})
    )
    console.log(this.state.inEditMode);
  }

  render() {
    return(
      <div className = "editButtonDiv">
        Currently, once you click this button, you cannot click it again unless you refresh the page (delete this message once this is changed)
        <button type="button" className={this.state.button_clickability} onClick={this.changeEditMode}>
          EDIT
        </button>
      </div>
    );
  }
}

export default EditButton;