import React, { Component } from "react";
import "../App.css";

import PadInput from "./PadInput";
import DesignBoard from "./DesignBoard";


function refreshPage() {//to refresh the page and is called to the button
  window.location.reload(false);
}

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
            onClick={() => this.setState({ isEditing: !isEditing })} //if statement one line to see when editing and not editing, when click on button
          >
            EDIT 
          </button>
          <button onClick={refreshPage}>Reload</button>   
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
