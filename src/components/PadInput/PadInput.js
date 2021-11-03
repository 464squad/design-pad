import React from "react";
import  './PadInput.css'

class PadInput extends React.Component{
    constructor(props){
        super(props)
        this.state={colors:[
        {ids:'1',color: 'Khaki'},
        {ids:'2',color: 'coral'},
        {ids:'3',color: 'maroon'},
        {ids:'4',color: 'salmon'},
        {ids:'5',color: 'slateblue'},
        {ids:'6',color: 'teal'},
        {ids:'7',color: 'olive'},
        {ids:'8',color: 'silver'}]
        //array of color is created
        
        }
    }    
    handleDrag = (e) =>{

        e.dataTransfer.setData("colors",e.target.id)
        console.log("Dragged!",e.target.id)
    }

    render(){
        const editButton=this.props.Padding
        return(
            <div className ='buttonList'>

          
                {this.state.colors.map((clors,index)=>(
             <div key={clors.color}>

                    {/*using inline if statement for edit button when its on and off */}
            
                {editButton?
                 <button 
                    id={clors.color} 
                    draggable = "false" 
                    onDragStart={(e)=>this.handleDrag(e)}>{clors.ids} 
                 </button>

                 : <button 
                    id={clors.color} 
                    draggable = "true" 
                    style={{backgroundColor: clors.color}}
                    onDragStart={(e)=>this.handleDrag(e)}>{clors.ids} 
                 </button> }

             </div>  ))}

              
            </div>
        )
    }

}
export default PadInput;