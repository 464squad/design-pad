import React, {Component} from 'react';

class PadInput extends Component {
    constructor(props) {
        super(props);
        /*
            TODO - set initial state for edit button
        */
       this.state = {
           editButton: false
       }
    }

    handleEditChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
        console.log("edit button updated")
        console.log(event.target)

       // change the state
        this.setState({
            [event.target.editButton]: event.target.value
        })
    }

    editButton = event => {
        // to prevent page reload on form submit
        event.preventDefault();
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
       console.log(this.state)
       console.log('Was I clicked?')
       this.props.handleEditChange(this.state) 
       console.log('Was I clicked again?')
    }

    render() {

        return(
            <button onClick={this.editButton}> Edit </button>
        )
    }
}


export default PadInput;