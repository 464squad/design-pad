import React, { Component } from 'react'
import PadInput from './PadInput'
import DesignBoard from './DesignBoard'
export class DesignContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {editMode: false}
    }

    onEdit = (event) => {
        console.log("Nice")
        event.preventDefault()
        this.setState({editMode: !this.state.editMode})
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <span>Design Pad</span>
                        <button onClick={this.onEdit}>Edit</button>
                        <PadInput/>
                    </div>
                    <div className="col-8">
                        <DesignBoard/>
                    </div>
                </div>
            </div>
        )
    }
}

export default DesignContainer
