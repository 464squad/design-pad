import React from 'react'
import "../css/DesignPad.css"

class DesignPad extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            padcolor: 'black'
        }
    }
  
    render(){
        return(
             <div className= "designPad"
             style={{backgroundColor: this.state.padcolor}}
            onDragOver={(e) => e.preventDefault}
            onDrop={(e) => this.setState({padcolor: 'red'})}
            >
                </div>
        
        )
    }
}

export default DesignPad;