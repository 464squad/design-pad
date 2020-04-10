import React from "react";
import "../css/PadInput.css";
import Pad from "./Pad";

function PadInput(props) {
  return (
    <div className="main-container">
      <div className="row">
        <Pad editing={props.editing} color="blue" />
        <Pad editing={props.editing} color="red" />
      </div>
      <div className="row">
        <Pad editing={props.editing} color="purple" />
        <Pad editing={props.editing} color="green" />
      </div>
      <div className="row">
        <Pad editing={props.editing} color="pink" />
        <Pad editing={props.editing} color="yellow" />
      </div>
      <div className="row">
        <Pad editing={props.editing} color="black" />
        <Pad editing={props.editing} color="orange" />
      </div>
    </div>
  );
}

export default PadInput;
