

import React from "react";
import "../css/PadInput.css";


function Pad(props) {
  const handleOnDragStart = event => {
    console.log("You are dragging me");
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
<<<<<<< Updated upstream
      <table>
        <tbody class= "table">
          <tr>
            <td class = "tableBlue">
              <Pad editing={props.editing} color="blue" />
            </td>
            <td class = "tableRed">
              <Pad editing={props.editing} color="red" />
            </td>
          </tr>
          <tr>
            <td class = "tablePurple">
              <Pad editing={props.editing} color="purple" />
            </td>
            <td class = "tableGreen">
              <Pad editing={props.editing} color="green" />
            </td>
          </tr>
          <tr>
            <td style={{ color: "black" }} class = "tablePink">
              <Pad editing={props.editing} color="pink" />
            </td>
            <td style={{color: "black"}} class = "tableYellow">
              <Pad editing={props.editing} color="yellow" />
            </td>
          </tr>
          <tr>
            <td class = "tableBrown">
              <Pad editing={props.editing} color="brown" />
            </td>
            <td class = "tableOrange">
              <Pad editing={props.editing} color="orange" />
            </td>
          </tr>
        </tbody>
      </table>
=======
      <div className="row">
        <Pad style="color:blue;"> editing={props.editing} color="blue" />
        <Pad editing={props.editing} color="red" />
      </div>
      <div className="row">
        <Pad editing={props.editing} color="purple" />
        <Pad editing={props.editing} color="green" />
      </div>
      <div className="row">
        <Pad editing={props.editing} color="pink"  />
        <Pad editing={props.editing} color="yellow" />
      </div>
      <div className="row">
        <Pad editing={props.editing} color="black" />
        <Pad editing={props.editing} color="orange" />
      </div>
>>>>>>> Stashed changes
    </div>
  );
}

export default PadInput;