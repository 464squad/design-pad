import React from "react";
import "../css/PadInput.css";

function Pad(props) {
    const handleOnDragStart = event => {
        console.log("Dragging it");
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
                <tbody class ="table">
                    <tr>
                        <td class="tableGreen">
                            <Pad editing={props.editing} color="green" />
                        </td>
                        <td class="tableYellow">
                            <Pad editing={props.editing} color="yellow" />
                        </td>
                    </tr>
                    <tr>
                        <td class="tablePurple">
                            <Pad editing={props.editing} color="purple" />
                        </td>
                        <td class="tableNavy">
                            <Pad editing={props.editing} color="navy" />
                        </td>
                    </tr>
                    <tr>
                        <td class="tablePink">
                            <Pad editing={props.editing} color="pink" />
                        </td>
                        <td class="tableOrange">
                            <Pad editing={props.editing} color="orange" />
                        </td>
                    </tr>
                    <tr>
                        <td class="tableOrangeRed">
                            <Pad editing={props.editing} color="orangered" />
                        </td>
                        <td class="tableBlueViolet">
                            <Pad editing={props.editing} color="blueviolet" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default PadInput;
