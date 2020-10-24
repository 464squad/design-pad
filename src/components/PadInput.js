import React, { Component } from 'react'
import "./style.css"
export class PadInput extends Component {

    drag =(ev) =>{
       ev.dataTransfer.setData("text", ev.target.id);
       console.log(ev.target.id)
       const selectedcolor = ev.target.style.backgroundColor
       console.log("color: "+selectedcolor)
      // ev.dataTransfer.setData("text", selectedcolor);
       console.log(ev.dataTransfer);
     }
     
   render() {
       return (

           <div>
              
           <div className="pad-box">
           <div>PadInput</div>
           <div className="couple">
           <div id = "clr1" className="drag-btn" style={{border: "1px solid #9999", backgroundColor: "red"}} draggable={true} onDragStart={this.drag}>1</div>
           <div id = "clr2" className="drag-btn" style={{border: "1px solid #9999", backgroundColor: "blue"}} draggable={true} onDragStart={this.drag} >2</div>
           </div>
           <div className="couple">
           <div id = "clr3" className="drag-btn" style={{border: "1px solid #9999", backgroundColor: "blueviolet"}} draggable={true} onDragStart={this.drag}>3</div> 
           <div id = "clr4" className="drag-btn" style={{border: "1px solid #9999", backgroundColor: "orange"}} draggable={true} onDragStart={this.drag}>4</div>
           </div>
           <div className="couple">
           <div id = "clr5" className="drag-btn" style={{border: "1px solid #9999", backgroundColor: "purple"}} draggable={true} onDragStart={this.drag}>5</div>
           <div id = "clr6" className="drag-btn" style={{border: "1px solid #9999",backgroundColor:"khaki"}} draggable={true} onDragStart={this.drag}>6</div>
           </div>
           <div className="couple">
           <div id = "clr7" className="drag-btn" style={{border: "1px solid #9999", backgroundColor:"tomato"}} draggable={true} onDragStart={this.drag}>7</div>
           <div id = "clr8" className="drag-btn" style={{border: "1px solid #9999",backgroundColor:"yellowgreen"}}draggable={true} onDragStart={this.drag}>8</div>
           </div>
           </div>
          
           
           </div>

       )
   }
}

export default PadInput
