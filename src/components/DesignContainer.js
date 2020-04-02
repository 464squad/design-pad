import React from 'react';
import DesignPad from './DesignPad.js'
import PadInput from './PadInput.js'
import '../design.css'

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
            <div 
            className = "designContainer"
            >
                <div className = "siteTitle" >
                    <p> AKK's ROYGBIV Color Swatcher</p>
                </div>
                <div className = 'editButton' >
                    <button onClick={console.log('Test Dummy Button')}>
                        Test
                    </button>
                </div>
                <PadInput onDrag={this.updateCurrentInput}/>
                <div className ="designBoard" >                
                    <DesignPad currentInput={this.state.currentInput}/>
                    <DesignPad currentInput={this.state.currentInput}/>
                    <DesignPad currentInput={this.state.currentInput}/>
                    <DesignPad currentInput={this.state.currentInput}/>
                </div>
                
            </div>
        )
    }

}

export default DesignContainer