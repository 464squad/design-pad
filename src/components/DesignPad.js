import React from 'react';
import PadInput from './PadInput';

class DesignPad extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          value : Array(9).fill(null),
      } 
  }


  render() {
      
      return (
          <div className="container">
              <div style={{color:"white"}}> <PadInput num="1"/> </div>
              <div style={{color:"white"}}> <PadInput num="2"/>  </div>
              <div style={{color:"white"}}> <PadInput num="3"/>  </div>
              <div style={{color:"white"}}> <PadInput num="4"/>  </div>
              <div style={{color:"white"}}> <PadInput num="5"/>  </div>
              <div style={{color:"white"}}> <PadInput num="6"/>  </div>
              <div style={{color:"white"}}> <PadInput num="7"/>  </div>
              <div style={{color:"white"}}> <PadInput num="8"/>  </div>
          </div>
      );
  }
}




export default DesignPad;