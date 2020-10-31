import React from 'react';
import DesignBoard from './DesignBoard';
import DesignPad from './DesignPad';
import PadInput from './PadInput';

class DesignContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = false
    }

    editButtonEvent = event => {
        // to prevent page reload on form submit
        // event.preventDefault();
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
        // this.setState(true)
        console.log('current state in edit button event',this.state)
        // console.log('Im the edit button event')
    }

    render() {

        return ( 
            <div className="container">

                { /*TODO - Add PadInput Component */ } 
                <PadInput handleEditChange={this.editButtonEvent} />

                <br/> 
                
                { /*TODO - Add DesignPad Component */ } 
                <DesignPad/>

                <br/> 
                { /*TODO - Add DesignBoard Component */ } 
                <DesignBoard/>

                <br/>
                
                { /*TODO - Add editButton Component */ }

            </div>
        );
    }
}

export default DesignContainer;