import React, { Component } from 'react'
import "./style.css"
class DesignBoard extends Component {
   
    
    constructor(props) {
        super(props)
        
       // let padInputColor= null;
        this.state = {
             //squares: Array(4).fill(null)
            // mode: this.props.mode
            filled: false,
            squares: Array(4).fill(null)
        }
        
    }


    drop=(ev)=>{
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        //console.log("in drop: "+data)
        //console.log(ev.target)
        //ev.target.appendChild(document.getElementById(data));
        //console.log(data);
       let padInputColor = document.getElementById(data).style.backgroundColor
       console.log("final padInput--" +padInputColor);
       ev.target.style.backgroundColor = padInputColor;
    //    this.setState({
    //     squares: this.props.mode
    //     })
        
       
    }

      allowDrop =(ev)=> {
        ev.preventDefault();
      }
   
    renderDesignPad()
    {
        console.log(this.props.mode);
        
        const mode = 
                    (this.props.mode)? 
                    <div className="square"
                    onDrop= {this.drop}  onDragOver={this.allowDrop}>
                    design pad
                    </div> : 
                     <div className="square">
                     design pad
                     </div> 
        
        return(mode);
        
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
