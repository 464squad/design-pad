import React from 'react';
import DesignBoard from "./DesignBoard";
import DesignPad from './DesignPad';

class DesignContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit : false,
        }
    }
    toggleEdit = () => {
        this.setState(prevState => ({isEdit :
        !prevState.isEdit}));
    }
    render() {
        const {isEdit} = this.state;
        return (
        <div >
            <h1 className="size"> Design Pad </h1>
            <button className={`box ${isEdit ? "true" : "false" }`} onClick={this.toggleEdit}>
            Edit
            </button>
        <span>{<DesignBoard />}</span>
        <span className="inputs">{<DesignPad />}</span>
        </div>
        );
    }
}


export default DesignContainer;