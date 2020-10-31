import React from 'react';
import { render } from 'react-dom';

class PadInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : Array(9).fill(null),
        }
    }
}



export default PadInput;