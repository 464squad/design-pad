import React from 'react'
import '../designpad.css';


class DesignPad extends React.Component {
    constructor(props) {
        super(props);
   
        this.state = {
            color: 'gray'
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
            <div>
                <div className="testPad" style={{background: this.state.color}} onDragOver={this.onDragOver} onDrop={() => this.onDrop()}></div>
            </div>
        )
    }
}


export default DesignPad