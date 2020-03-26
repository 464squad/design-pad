import React from "react";
import PadInput from "./PadInput";

class DesignContainer extends React.Component {
  constructor() {
    super();
    this.state = {editing: false}
  }
  updateEditState =(event)=>{
    this.setState({editing:!this.state.editing})
    
  }
  render() {
    const btnClass = this.state.editing ? "editButtonActive" : "editButton";
    return (
      <div>
        <PadInput />
        <button onClick= {this.updateEditState} className = {btnClass}>Edit</button>
      </div>
    );
  }
}

export default DesignContainer;
