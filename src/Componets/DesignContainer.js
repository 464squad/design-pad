import React, { Component } from 'react'
import PadInput from './PadInput'
import DesignBoard from './DesignBoard'
export class DesignContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {editMode: false}
        this.state = {color: 'black'}
    }

    onEdit = (event) => {
        console.log("Nice")
        event.preventDefault()
        this.setState({editMode: !this.state.editMode})
        this.setState({color: 'lightred'})
        this.forceUpdate()
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12" style = {{
                    textAlign: 'center',
                    textSizeAdjust: '50px',
                    textTransform: 'uppercase',
                    color: 'black'
                }}>
                        {/* <span>Design Pad</span> */}
                        <h1>Design Pad</h1>
                        <button onClick={this.onEdit} style= {{
                             float: 'right',
                             marginRight: '50px',
                             backgroundColor: 'black',
                             color: 'white',
                             border: 'none',
                             padding: '20px',
                             fontSize: '16px',
                             borderRadius: '12px',                    

                            }}>EDIT
                        </button>
                        <PadInput/>
                    </div>
                    <div className="col-12">
                        <DesignBoard/>
                    </div>
                </div>
            </div>
        )
    }
}

export default DesignContainer
