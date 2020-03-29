import React from "react";
import "../css/DesignContainer.css";
import PadInput from "./PadInput";
import DesignBoard from "./DesignBoard";

export default class DesignContainer extends React.Component {
  state = {
    edit: false
  };

  handleClick = () => {
    this.setState(props => ({
      edit: !props.edit
    }));
  };

  render() {
    const edit = this.state.edit;

    return (
      <div>
        <div className="top-container">
          <h1>DESIGN PAD</h1>
          <button
            className="edit-btn"
            onClick={this.handleClick}
            style={{ backgroundColor: edit ? "red" : "black" }}
          >
            Edit
          </button>
        </div>
        <div className="main-container">
          <PadInput edit={edit} />
          <DesignBoard />
        </div>
      </div>
    );
  }
}
