import React from "react";
import "../css/DesignPad.css";


class DesignPad extends React.Component {
   

state={
    count: 0,
 
};
styles ={
    fontSize: 100,
    fontWeight: 'bold'
};


render(){
   /* return(
     <div className="wpad">

         </div>  )
         */
    return( 
        <div>
       
        <span style={this.styles}> {this.fCo()}</span>
    <button> BTest   </button>
            </div>
    
    );
    }

fCo(){
    const { count } = this.state;
    return count === 0 ?  "zez" : count;
}
    
    
}
export default DesignPad;