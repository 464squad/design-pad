import React from 'react';

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
              <div className="input" style={{color:"white"}}> 1 </div>
              <div className="input" style={{color:"white"}}> 2 </div>
              <div className="input" style={{color:"white"}}> 3 </div>
              <div className="input" style={{color:"white"}}> 4 </div>
              <div className="input" style={{color:"white"}}> 5 </div>
              <div className="input" style={{color:"white"}}> 6 </div>
              <div className="input" style={{color:"white"}}> 7 </div>
              <div className="input" style={{color:"white"}}> 8 </div>
          </div>
      );
  }
}



export default DesignPad;