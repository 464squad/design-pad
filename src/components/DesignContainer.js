import React from 'react';
import PadInput from './PadInput';
import DesignBoard from './DesignBoard';
import '../designboard.css';
import EditBttn from './EditBttn'
class DesignContainer extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            //color: 'orange'
            currentInput: {}
        }
    }

    updateCurrentInput= (squares) =>(
        this.setState({currentInput: squares})
    )
    render() {

        return(
            <div className = "masterContainer">
                <h1>Design Pad</h1>
                    <PadInput onDrag={this.updateCurrentInput}/>
                    <DesignBoard currentInput={this.state.currentInput}/>
			<EditBttn />
            </div>
        );
    }
}

export default DesignContainer;