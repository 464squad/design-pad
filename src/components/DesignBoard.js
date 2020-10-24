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
        //console.log(ev.target)
        //ev.target.appendChild(document.getElementById(data));

        this.padInputColor = document.getElementById(data).style.backgroundColor
        //console.log("final padInput--" +this.padInputColor)
        // ev.target.style.backgroundColor = this.padInputColor
    
        const div_index = ev.target.id
        const squareWithChange = this.state.squares.slice()
        squareWithChange[div_index] = "changed"
        //console.log(squareWithChange)

    const squaresBackground = sqaures_background
    squaresBackground[div_index] = this.padInputColor
      //console.log(squaresBackground)
    this.setState({
        squares: squareWithChange,
    })
}
    allowDrop =(ev)=> {
        ev.preventDefault();
    }
    handleResetToggle = ()=>{
        let isResetSuccess = true;
       this.props.handleToggle(isResetSuccess)

    }
    renderDesignPad(i)
    { 
        const bck_clr = sqaures_background[i]

        const style = {
            background: bck_clr,
        }

        // console.log(style_restet)

        const mode = this.props.mode
        const reset = this.props.reset
        
         
        if(mode === false){  /*in view mode*/ 
            return(
            <div id= {i}  className= "square" style={style}>
            </div>
            )
    }
        else if(mode === true && reset !== true) {
            return (           /*in edit mode*/
            <div  id= {i}  className= "square" style={style}
                onDrop= {this.drop}  onDragOver={this.allowDrop}>
            </div> 
            )
        }
        else if(mode === true && reset === true)
        {
            sqaures_background[i] = "DarkGray"
            const style1={
                background: sqaures_background[i]
            }
           if(reset === true){
            this.handleResetToggle()
            }

            return(
                <div id= {i}  className= "square" style={style1} 
                onDrop= {this.drop}  onDragOver={this.allowDrop} >
                </div>
                )
        }

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
