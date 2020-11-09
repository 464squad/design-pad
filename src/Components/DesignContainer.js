import React from 'react';
import "../App.css";

import DesignBoard from "./DesignBoard";
import PadInput from "./PadInput";

function refreshPage() {
    window.location.reload(false);
}

class DesignContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            isEditing: false,
            colorOptions: [
                "green",
                "yellow", 
                "purple", 
                "navy", 
                "pink", 
                "orange", 
                "orangered", 
                "blueviolet"
            ],
        };
    }

    render() {
        const isEditing = this.state.isEditing;
        return (
            <div className="App">
                <header className="App-Header">
                    <h1>Drag and Drop</h1>

                    <button class={isEditing ? "editing" : "not-editing"}
                            onClick={() => this.setState({ isEditing: !isEditing })}
                            > 
                            Edit
                    </button>
                    <button class= 'reload' onClick={refreshPage}> Reload</button>
                </header>

                <main className="main-container">
                    <PadInput isEditing={isEditing} colors={this.state.colorOptions} />
                    <DesignBoard />
                </main>
            </div>
        );
    }
}

export default DesignContainer;
