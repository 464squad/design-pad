import React from "react";
import DesignBoard from "./DesignBoard";
// import PadInput from "./PadInput";
// import DesignPad from "./DesignPad";

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
        <button onClick={this.updateEditState} className={btnClass}>
          Edit
        </button>
        <DesignBoard />
      </div>
    );
  }
}

export default DesignContainer;
