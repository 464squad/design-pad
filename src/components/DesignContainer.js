import React from 'react';
import DesignPad from './DesignPad.js'
import PadInput from './PadInput.js'
import ShowAlert from './ShowAlert.js'
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
                <ShowAlert />
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