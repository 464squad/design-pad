import React from 'react';
import DesignBoard from "./DesignBoard";
import PadInput from "./PadInput";
import DesignPad from "./DesignPad";
import "../css/DesignContainer.css";

class DesignContainer extends React.Component {
    state = { editing: false };
    updateEditState = () => {
        this.setState(props => ({
            editing: !props.editing
        }));
    };

    deselectState = () => {
        this.setState = {color: "light-grey"};
        console.log("reset pad");
    }

    render () {
        const buttonClass = this.state.editing ? "editButtonInitiated" : "editButton";
        const editing = this.state.editing;

        return (
            <div>
                <div>
                    <h1>Design Pad</h1>
                    <button className={buttonClass} onClick={this.updateEditState}>
                        Edit
                    </button>
                    <button class="deselectButton" onClick= {this.deselectState}> Empty </button>

                </div>

                <PadInput editing = {editing}/>
                <DesignBoard/>
            </div>
        );
    }
}

export default DesignContainer;
