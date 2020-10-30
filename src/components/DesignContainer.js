import React, { Component } from 'react';
import PadInput from './PadInput';

class DesignContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: ""
    }
  }

  render() {
    return (
      <div>
          <PadInput/>
      </div>
    );
  }

}

export default DesignContainer;
