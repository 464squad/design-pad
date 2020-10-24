import React, { Component } from 'react'
import "./style.css"
export class PadInput extends Component {

    drag =(ev) =>{
    ev.dataTransfer.setData("text", ev.target.id);
    console.log(ev.target)
    const selectedcolor = ev.target.style.backgroundColor
    console.log("color: "+ selectedcolor)
      // ev.dataTransfer.setData("text", selectedcolor);
    }
    render() {
    return (
        //<div class="padInput" >PadInput</div>
        <div className="pad-box">
            <div className="pad_Item" id = "clr1" style={{border: "1px solid #9999", backgroundColor: "LightPink"}} draggable={true} onDragStart={this.drag}>1</div>
            <div className="pad_Item" id = "clr2" style={{border: "1px solid #9999", backgroundColor: "LightGreen"}} draggable={true} onDragStart={this.drag} >2</div>
            <div className="pad_Item" id = "clr3" style={{border: "1px solid #9999", backgroundColor: "HotPink"}} draggable={true} onDragStart={this.drag}>3</div> 
            <div className="pad_Item" id = "clr4" style={{border: "1px solid #9999", backgroundColor: "LightSalmon"}} draggable={true} onDragStart={this.drag}>4</div>
            <div className="pad_Item" id = "clr5" style={{border: "1px solid #9999", backgroundColor: "LightSeaGreen"}} draggable={true} onDragStart={this.drag}>5</div>
            <div className="pad_Item" id = "clr6" style={{border: "1px solid #9999",backgroundColor:"OrangeRed"}} draggable={true} onDragStart={this.drag}>6</div>
            <div className="pad_Item" id = "clr7" style={{border: "1px solid #9999", backgroundColor:"Violet"}} draggable={true} onDragStart={this.drag}>7</div>
            <div className="pad_Item" id = "clr8" style={{border: "1px solid #9999",backgroundColor:"yellowgreen"}}draggable={true} onDragStart={this.drag}>8</div>
        </div>
        )
    }
}

export default PadInput
