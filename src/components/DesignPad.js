import React from 'react'
// import { ReactComponent } from '*.svg';
import '../designpad.css';


class DesignPad extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            color: 'orange',
            input: 1
        }
    }

    buttonOne = (event) => {
        this.setState({color: 'blue'})

        // if(event.target.id == '1') {
        //     this.setState({color: 'blue', input: 0})
        // }
        // else if (event.target.id == '2'){
        //     this.setState({color: 'red', input: 1})
        // }
        // else if (event.target.id == '3'){
        //     this.setState({color: 'grey', input: 1})
        // }
    }
    buttonTwo = (event) => {
        this.setState({color: 'red'})
    }
    buttonThree = (event) => {
        this.setState({color: 'green'})
    }

    render(){
        return(
            <div>
                <button onClick={() => this.buttonOne()}> 1 </button>
                <button onClick={() => this.buttonTwo()}> 2 </button>
                <button onClick={() => this.buttonThree()}> 3 </button>
                <div className="testPad" style={{background: this.state.color}}> </div>
                {/* <div className = "padOne"> </div>
                <div className = "padTwo"> </div>
                <div className = "padThree"> </div>
                <div className = "padFour"> </div> */}
            </div>
        )
    }
}


export default DesignPad