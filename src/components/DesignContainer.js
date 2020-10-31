import React from 'react';
import DesignBoard from "./DesignBoard";

class DesignContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
        <div>
            <h1 className="size"> Design Pad </h1>
            <button className="btn">Edit</button>
        <span>{<DesignBoard />}</span>
        </div>
        );
    }
}

export default DesignContainer;