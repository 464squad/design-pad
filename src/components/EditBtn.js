import React, { Component } from 'react';


class EditBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return(
            
                <button onClick={this.handleClick}>
                     {this.state.isToggleOn ? 'EDIT OFF' : 'EDIT ON'}
                 </button>
            
        )
    }
 }


 export default EditBtn