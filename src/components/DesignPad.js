
import React from "react";
import { useState } from "react";
import "./DesignPad.css";
import PadInput from "./PadInput";
class DesignPad extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      colors: "lightgrey",
      gif:"none"
    };
  }
 

  dragOver = (e) => {
    e.preventDefault();
  };

  onDrop = (e) => {
    const newColor = e.dataTransfer.getData("colors");
    const newGif = e.dataTransfer.getData("gif")
    this.setState({ colors: newColor });
    this.setState({gif: newGif })
  };

  // you could use hooks(useState) or convert this into a class extend Component so you can use this.state like how the prof flowers taught but keep the same div and classname
  //need to create a drop to transferdata to the pad link if you need help https://www.pluralsight.com/guides/drag-and-drop-react-components
  // https://www.youtube.com/watch?v=-MfTv5VRM0A https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
  render() {
    return (
      <div className="row right-box">
        <div
          className="col pad"
          style={{ backgroundColor: this.state.colors, backgroundImage: `url(${this.state.gif})`, backgroundSize: "auto" }}
          
          onDragOver={this.dragOver}
          onDrop={this.onDrop}
        >
          <div id="footer"></div>
        </div>
      </div>
    );
  }
}




export default DesignPad

