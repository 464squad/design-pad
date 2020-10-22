import React, { Component } from 'react'
import "./style.css"
class DesignBoard extends Component {
   
    
    constructor(props) {
        super(props)
        
       // let padInputColor= null;
        this.state = {
             squares: Array(4).fill(null),
            
        }
    }

    drop=(ev)=>{
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        //console.log("in drop: "+data)
        //console.log(ev.target)
        //ev.target.appendChild(document.getElementById(data));
       let padInputColor = document.getElementById(data).style.backgroundColor
       console.log("final padInput--" +padInputColor)
       ev.target.style.backgroundColor = padInputColor
     
    
   
    
}


      allowDrop =(ev)=> {
        ev.preventDefault();
      }
   
    renderDesignPad(i)
    {
        const mode = this.props.mode
        if(mode === false){
            return(
            <div id= "this.props.value" className="square">
                design pad
                </div>
            )
            }
            return (           /*in edit mode*/
                <div className="square"
                onDrop= {this.drop}  onDragOver={this.allowDrop}>
                 design pad
               </div> 
            )
    }
    render() {
        
        return (
            <div>
                <div className="board-row">
                    {this.renderDesignPad(0)}
                    {this.renderDesignPad(1)}
                </div>

                <div className="board-row">
                 {this.renderDesignPad(2)}
                 {this.renderDesignPad(3)}
               </div>
              
                
            </div>
        )
    }
}

export default DesignBoard
