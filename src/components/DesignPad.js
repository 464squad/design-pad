import React, {Component} from 'react';
import '../design.css';

class DesignPad extends Component {
    constructor(props) {
        super(props);
   
        this.state = {
            color: 'pink'
        }
    }

    onDrop = (event) => {
        console.log("Dropped something right here")
        this.setState({
            color: this.props.currentInput.color
        })
    }

    onDragOver = (event) => {
        event.preventDefault();
      }

    render(){
        return(
                <div className="designPad" 
                style={{background: this.state.color}} 
                onDragOver={this.onDragOver} 
                onDrop={() => this.onDrop()}>
                </div>
        )
    }
}

export default DesignPad