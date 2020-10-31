import React from "react";
import "../css/PadInput.css";
import Pad from "./Pad";

function PadInput(props) {
  return (
    <div className="main-container">
      <div className="row">
        <Pad editing={props.editing} color="Blue"/>
        <Pad editing={props.editing} color="Red" />
      </div>
      <div className="row">
        <Pad editing={props.editing} color="Purple" />
        <Pad editing={props.editing} color="Green" />
      </div>
      <div className="row">
        <Pad editing={props.editing} color="Pink"/>
        <Pad editing={props.editing} color="Yellow" />
      </div>
      <div className="row">
        <Pad editing={props.editing} color="Black" />
        <Pad editing={props.editing} color="Orange" />
      </div>
    </div>
  );
}

export default PadInput;
