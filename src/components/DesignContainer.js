import React from 'react';
import DesignPad from "./DesignPad";

class DesignContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
        <div>

            <button className="btn">Edit</button>
        <DesignPad />
        </div>
        );
    }
}

export default DesignContainer;