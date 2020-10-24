import React from 'react';
import DesignPad from './DesignPad';
import DesignBoard from './DesignBoard';
import PadInput from './PadInput';

class DesignContainer extends React.Component {
    constructor(props) {
        super(props)


    }

    editButton = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();

        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
        console.log(this.state)
        this.props.onSubmit(this.state)
    }

    render() {

        return ( 
            <div className="container">
                <h1> DESIGN PAD </h1> 
                
                { /*TODO - Add PadInput Component */ } 
                <PadInput/>

                <br/>

                { /*TODO - Add DesignBoard Component */ } 
                <DesignBoard/>

                <br/> 

                { /*TODO - Add DesignPad Component */ } 
                <DesignPad/>
                
                <br/> 
                
                { /*TODO - Add editButton Component */ }
                <button onClick = { this.editButton } > EDIT </button>

            </div>
        );
    }
}

export default DesignContainer;