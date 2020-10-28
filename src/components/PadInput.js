import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        /*
            TODO - set initial state for editButton

        */

    }


    handleEditChange = event => {
        /*
            TODO - Logic for changing state based on Edit button click changes
        */
        console.log("EDIT BUTTON CLICKED")
        console.log(event.target)

        //changing the state
        this.setState({
            [event.target.editButton]: event.target.value
        })

    }


    editButton = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();

        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
        console.log(this.state)
        this.props.handleEditChange(this.state)
    }


    render() {

        return (null

            //<button onClick={this.editButton}> EDIT </button>

        )

    }
}

export default Form;