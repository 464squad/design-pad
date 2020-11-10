

import React from "react";
import "../css/PadInput.css";


function Pad(props) {
  const handleOnDragStart = event => {
    console.log("You are currently Dragging me !!");
    event.dataTransfer.setData("color", props.color);
  };

  return (
    <div draggable={props.editing} onDragStart={handleOnDragStart}>
      {props.color}
    </div>
  );
}

function PadInput(props) {
  
  return (
    <div className="main-container">
      <table>
        <tbody class="table">
          <tr>
            <td class="tableOrange">
              <Pad editing={props.editing} color="orange" />
            </td>
            <td class="tableRed">
              <Pad editing={props.editing} color="red" />
            </td>
          </tr>
          <tr>
            <td class="tablePurple">
              <Pad editing={props.editing} color="purple" />
            </td>
            <td class="tablePink">
              <Pad editing={props.editing} color="pink" />
            </td>
          </tr>
          <tr>
            <td class="tableGreen">
              <Pad editing={props.editing} color="green" />
            </td>
            <td class="tableYellow">
              <Pad editing={props.editing} color="yellow" />
            </td>
          </tr>
          <tr>
            <td class="tableBrown">
              <Pad editing={props.editing} color="brown" />
            </td>
            <td class="tableBlue">
              <Pad editing={props.editing} color="blue" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PadInput;