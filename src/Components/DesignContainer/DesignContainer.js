import React, { Component } from 'react';
import './DesignContainer.css';

class DesignContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='DesignContainer__container'>
        <header className='DesignContainer__header'>Design Pad</header>
      </div>
    );
  }
}

export default DesignContainer;
