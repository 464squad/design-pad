import React from 'react';
import DesignPad from './DesignPad.js'
import PadInput from './PadInput.js'

class DesignContainer extends React.Component {
    constructor(props){
        super(props)

        this.state={
            currentInput: {}
        }
    }

    updateCurrentInput = (padButton) => {
        this.setState({ currentInput: padButton})
    }

    render(){
        return(
            <div style={{display: 'flex'}}>
                <DesignPad currentInput={this.state.currentInput}/>
                <PadInput onDrag={this.updateCurrentInput}/>
            </div>
        )
    }

}

export default DesignContainer