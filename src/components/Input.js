import React from 'react'



class Input extends React.Component{
    render(){
        return(
            <div className = {Input}
            style={{
                  width: "50px", height: "30px"
            }    
            }>
               {this.props.color}           
            </div>
        )
    }

}






export default Input