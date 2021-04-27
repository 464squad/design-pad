import React from 'react';
import DesignPad from './Design_Pad.js'
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
                <h1>Design Container</h1>
                {/* <div className = "siteTitle" >
                    <p> ROYGBIV Color Swatcher</p>
                </div> */}
                <PadInput onDrag={this.updateCurrentInput}/>
                <div className ="designBoard" >    
                     <div className="boardRow" >         
                        <DesignPad currentInput={this.state.currentInput}/>
                        <DesignPad currentInput={this.state.currentInput}/>
                    </div> 
                    <div className="boardRow" > 
                        <DesignPad currentInput={this.state.currentInput}/>
                        <DesignPad currentInput={this.state.currentInput}/>
                    </div>
                </div>
                
            </div>
        )
    }

}

export default DesignContainer