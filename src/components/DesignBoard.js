import React, { Component } from 'react';
import DesignPad from './DesignPad';

class DesignBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: ""
    }
  }

  render() {
    return (
      <div>
          <DesignPad/>
      </div>
    );
  }

}

export default DesignBoard;
