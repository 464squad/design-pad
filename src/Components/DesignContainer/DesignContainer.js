import React, { Component } from 'react';
import DesignPanel from '../DesignPanel/DesignPanel';

class DesignContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editActive: false
    };
  }

  updateEditButton = () => {
    const { editActive } = this.state;
    editActive === false
      ? this.setState({ editActive: true })
      : this.setState({ editActive: false });
  };

  render() {
    const { editActive } = this.state;

    return (
      <div>
        <header>Design Pad</header>
        <button onClick={this.updateEditButton}>Edit</button>
        {editActive === false ? '' : <DesignPanel />}
      </div>
    );
  }
}

export default DesignContainer;
