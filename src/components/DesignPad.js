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
              <div style={{color:"white"}}> <PadInput /> </div>
              <div style={{color:"white"}}> <PadInput />  </div>
              <div style={{color:"white"}}> <PadInput />  </div>
              <div style={{color:"white"}}> <PadInput />  </div>
              <div style={{color:"white"}}> <PadInput />  </div>
              <div style={{color:"white"}}> <PadInput />  </div>
              <div style={{color:"white"}}> <PadInput />  </div>
              <div style={{color:"white"}}> <PadInput />  </div>
          </div>
      );
  }
}




export default DesignPad;