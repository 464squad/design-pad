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
  clearState = () => {
    this.setState({ color: "light-grey" });
    console.log("reset the pad");
  }
  render() {
    const btnClass = this.state.editing ? "editButtonActive" : "editButton";
    const editing = this.state.editing;
    return (
      <div>
        <div>
          <h1>Design Pad</h1>
          <button className={btnClass} onClick={this.updateEditState}>
            Edit
          </button>
          <button onClick={{ backgroundColor: this.clearState }}> Clear </button>
        </div>

        <PadInput editing={editing} />
        <DesignBoard />
      </div>
    );
  }
}


export default DesignContainer;