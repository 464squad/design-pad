import React from "react";
import DesignBoard from "./DesignBoard";
import PadInput from "./PadInput";
import "../css/DesignContainer.css";

class DesignContainer extends React.Component {
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
        <DesignBoard />
      </div>
    );
  }
}

export default DesignContainer;
