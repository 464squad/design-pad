import React from "react";
import DesignBoard from "./DesignBoard";
import PadInput from "./PadInput";
import "../css/DesignContainer.css";

class DesignContainer extends React.Component {
  state = { editing: false };

  updateEditState = () => {
    this.setState(props => ({
      editing: !props.editing
    }));
  };

  render() {
    
    const btnClass = this.state.editing ? "editButtonActive" : "editButton";
    const editing = this.state.editing;

    return (
      <div>
        <div>
          <h1>DESIGN PAD</h1>
          <button className={btnClass} onClick={this.updateEditState}>
            EDIT
          </button>
        </div>

        <PadInput editing={editing} />
        <DesignBoard />
      </div>
    );
  }
}

export default DesignContainer;
