import React from "react";
import DesignPad from "./DesignPad";
import PadInput from "./PadInput";
import "../css/DesignBoard.css";

class DesignBoard extends React.Component {
  constructor() {
    super();
    this.state = { editing: false };
  }

  updateEditState = event => {
    this.setState({ editing: !this.state.editing });
  };

  render() {
    const btnClass = this.state.editing ? "editButtonActive" : "editButton";
    return (
      <div>
        <button className={btnClass} onClick={this.updateEditState}>
          Edit
        </button>
        <PadInput />
        <DesignPad />
      </div>
    );
  }
}

export default DesignBoard;
