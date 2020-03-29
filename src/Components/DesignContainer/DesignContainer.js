import React, { Component } from 'react';
import DesignPanel from '../DesignPanel/DesignPanel';

class DesignContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>Design Pad</header>
        <DesignPanel />
      </div>
    );
  }
}

export default DesignContainer;
