import React from 'react'
import "../css/DesignContainer.css"
import PadInput from './PadInput';
import DesignBoard from './DesignBoard';

class DesignContainer extends React.Component {

    constructor(){
        super()
        this.state = {
            edit: 'black'
        }
    }

    handleClick = () => {
        if(this.state.edit == 'black'){
            this.setState({edit: 'red'})
        } else {
            this.setState({edit: 'black'})
        }
    }

    render(){
        return(
            <div className="DesignContainer">
                <div className="topContainer">
                    <div className="topContainer--header">DESIGN PAD</div>
                    <button 
                        className="topContainer--editButton"
                        onClick={this.handleClick}
                        style={{backgroundColor: this.state.edit}}
                    >
                        EDIT
                    </button>
                </div>
                <div className="mainContainer">
                    <PadInput />
                    <DesignBoard />
                </div>
            </div>
        )
    }
}

export default DesignContainer;