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

    render() {

        return(
            <div>
                <handleEditChange/>
            </div>
        )
    }
}


export default PadInput;