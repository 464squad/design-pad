import React, { Component } from 'react'
import PadInput from './PadInput'
import DesignBoard from './DesignBoard'
export class DesignContainer extends Component {
    
    divStyle = {
        float: 'right',
        marginRight: '50px',
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        padding: '20px',
        fontSize: '16px',
        borderRadius: '12px',                    
    }

    textStyle = {
        textAlign: 'center',
        textSizeAdjust: '50px',
        textTransform: 'uppercase',
        color: 'black'
    }

    constructor(props) {
        super(props);
        this.state = {editMode: false, color: 'black'}
        this.board = React.createRef();
        this.pad = React.createRef();
    }

    onEdit = (event) => {
        console.log("Nice")
        //event.preventDefault()
        let mode = !this.state.editMode;
        this.setState({editMode: mode, color: 'lightred'})
        this.pad.current.setState({editMode: mode})
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12" style = {this.textStyle}>
                        {/* <span>Design Pad</span> */}
                        <h1>Design Pad</h1>
                        <button onClick={() => this.onEdit()} style={this.divStyle}>EDIT</button>
                        <PadInput ref={this.pad}/>
                    </div>
                    <div className="col-12">
                        <DesignBoard ref={this.board}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default DesignContainer
