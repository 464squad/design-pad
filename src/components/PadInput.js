import React, { Component } from 'react'
import "./style.css"
export class PadInput extends Component {

    drag =(ev) =>{
      ev.dataTransfer.setData("text", ev.target.id);
      console.log(ev.target)
      const selectedcolor = ev.target.style.backgroundColor
      console.log("color: "+selectedcolor)
      // ev.dataTransfer.setData("text", selectedcolor);

    }
  render() {
      return (
          <div>


          <div className="pad-box">
          <div>PAD INPUT</div>
          <div>
          <div id = "clr1" style={{border: "1px solid #9999", backgroundColor: "LightPink"}} draggable={true} onDragStart={this.drag}>1</div>
          <div id = "clr2" style={{border: "1px solid #9999", backgroundColor: "LightGreen"}} draggable={true} onDragStart={this.drag} >2</div>
          </div>
          <div>
          <div id = "clr3" style={{border: "1px solid #9999", backgroundColor: "HotPink"}} draggable={true} onDragStart={this.drag}>3</div> 
          <div id = "clr4" style={{border: "1px solid #9999", backgroundColor: "LightSalmon"}} draggable={true} onDragStart={this.drag}>4</div>
          </div>
          <div >
          <div id = "clr5" style={{border: "1px solid #9999", backgroundColor: "LightSeaGreen"}} draggable={true} onDragStart={this.drag}>5</div>
          <div id = "clr6" style={{border: "1px solid #9999",backgroundColor:"OrangeRed"}} draggable={true} onDragStart={this.drag}>6</div>
          </div>
          <div>
          <div id = "clr7" style={{border: "1px solid #9999", backgroundColor:"Violet"}} draggable={true} onDragStart={this.drag}>7</div>
          <div id = "clr8" style={{border: "1px solid #9999",backgroundColor:"yellowgreen"}}draggable={true} onDragStart={this.drag}>8</div>
          </div>
          
          </div>
          
          
          </div>

      )
  }
}

export default PadInput
