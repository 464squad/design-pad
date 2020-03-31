import React, { Component } from 'react';
import '../editButton.css';

class EditButton extends Component {

state = {
  disabled: true
}

handleChange = (event) => {
    this.setState ({
      disabled: false
    });
  }

  handleChange = (event) => {
  this.setState ({
    disabled: true
   });
 }

render() {
  return (
    <div classname = "Edit">
      <form>
       
        <button disabled = {this.state.disabled}>Edit</button>
      </form>
    </div>
     );
  }
}

export default EditButton;
