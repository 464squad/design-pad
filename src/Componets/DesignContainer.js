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
            <div>
                <div>
                Design Pad
                </div>
                <button onClick={this.onEdit}>Edit</button>
                <PadInput>

                </PadInput>
                <DesignBoard>

                </DesignBoard>
            </div>
        )
    }
}

export default DesignContainer
