import React from 'react';

class DesignPad extends React.Component{
  // SETTING STATE TO SOMETHING RANDOM FOR RIGHT NOW
// const[color, setColor] = useState("lightblue");
constructor(props){
super(props);
  this.state = {color: "grey"};
}

// LETS YOU KNOW WHAT HAPPENS WHEN YOU DROP A COLOR ON TOP OF A PAD
    handleDrop = (e) =>{
      e.preventDefault();
      var data = e.dataTransfer.getData("text");
      this.setState({color: data});
      
     console.log(data);
     alert("dropped");
  }

  // RESETS THE FOUR PADS TO WHITE
  reset (e) {
    // this.setState("white");
    //  this.setState({color:"white"});
    alert("reset");
 }

// ALLOWS YOU TO DRAG WITHOUT AN ISSUE
   handleDragOver(e) {
    e.preventDefault(); 
    alert("drag over");
  }

render(){
    return (
     
          <div class="flex-container2">
            {/* THE FOUR PADS ARE BELOW-STILL NEEDS TO BE WORKED ON */}
                <div className="drag-over" onDrop={this.handleDrop} onDragOver={this.handleDragOver} style={{backgroundColor: this.state.color}}>1</div>
                <div className="drag-over" onDrop={this.handleDrop} onDragOver={this.handleDragOver} style={{backgroundColor: this.state.color}}>2</div>
                <div className="drag-over" onDrop={this.handleDrop} onDragOver={this.handleDragOver} style={{backgroundColor: this.state.color}}>3</div>  
                <div className="drag-over" onDrop={this.handleDrop} onDragOver={this.handleDragOver} style={{backgroundColor: this.state.color}}>4</div>
                <button className="resetButton" onClick={this.reset}>Reset</button>
      </div>
    );
  
    }
  }
export default DesignPad;