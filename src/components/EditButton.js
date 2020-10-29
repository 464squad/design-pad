import React, {Component} from 'react';
import './EditButton.css';

class EditButton extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <button className="editButton" onClick = {this.edit}>EDIT</button>
        );
    }
}

export default EditButton;