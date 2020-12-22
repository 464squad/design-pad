import React from 'react'



class Input extends React.Component{
   drag(ev) {
   // ev.dataTransfer.setData("text", ev.target.id);
    console.log("Drag")
  }
    render(){
        return(
            <div className = {Input}
            style={{
                  width: "50px", height: "30px"
            }    }
            draggable = {true}
            onDragStart={this.drag}
            >
               {this.props.color}   
                    
            </div>
        )
    }

}






export default Input