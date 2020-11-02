import React, { Component } from "react";
import "../App.css";

import PadInput from "./PadInput";
import DesignBoard from "./DesignBoard";

class DesignContainer extends Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
      colorChoices: [
        "red",
        "blue",
        "yellow",
        "green",
        "pink",
        "purple",
        "gray",
        "black",
      ],
    };
  }

  render() {
    const isEditing = this.state.isEditing;
    return (
      <div className="app">
        <header className="app-header">
          <h1>Drag_And_Drop</h1>

          <button
            class={isEditing ? "editing" : "no-editing"}
            onClick={() => this.setState({ isEditing: !isEditing })}
          >
            EDIT
          </button>
        </header>

        <main className="main-container">
          <PadInput isEditing={isEditing} colors={this.state.colorChoices} />
          <DesignBoard />
        </main>
      </div>
    );
  }
}

export default DesignContainer;
