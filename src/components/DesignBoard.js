import React, { Component } from 'react'
import "./style.css"
const sqaures_background= ["DarkGray", "DarkGray", "DarkGray","DarkGray"]
class DesignBoard extends Component {
   
    
    constructor(props) {
        super(props)
        
       let padInputColor= null;
        this.state = {
             squares: Array(4).fill(null),
           
            
        }
    }

    drop=(ev)=>{
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        //console.log("in drop: "+data)
        console.log(ev.target)
        //ev.target.appendChild(document.getElementById(data));
       this.padInputColor = document.getElementById(data).style.backgroundColor

       //console.log("final padInput--" +this.padInputColor)
       ev.target.style.backgroundColor = this.padInputColor
       
    
     const div_index = ev.target.id
     //console.log("div id -"+div_index)
    

      const squareWithChange = this.state.squares.slice()
      
      squareWithChange[div_index] = "changed"
      //console.log(squareWithChange)
 
      const squaresBackground = sqaures_background
      squaresBackground[div_index] = this.padInputColor
     
      console.log(squaresBackground)



      this.setState({
          squares: squareWithChange,
      })
}


      allowDrop =(ev)=> {
        ev.preventDefault();
      }
   
    renderDesignPad(i)
    {  
        const bck_clr = sqaures_background[i]
   
         const style = {
             background: bck_clr,
}
         console.log(style)

        const mode = this.props.mode

        if(mode === false){ 
            return(
            <div id= {i}  className= "square" style={style}>
            </div>
            )
     }
            return (           /*in edit mode*/
                <div  id= {i}  className= "square" style={style}
                onDrop= {this.drop}  onDragOver={this.allowDrop}>
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
