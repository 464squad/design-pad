import React from "react";
import  './PadInput.css'
import DesignPad from "../DesignPad/DesignPad";




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
        
        }
    }

    allowDrop = (e) =>{
       e.preventDefault()
    }
    
    handleDrag = (e) =>{

        e.dataTransfer.setData("colors",e.target.id)
        console.log("Dragged!",e.target.id)
        e.target.style.backgroundColor=e.target.id;

    }
    
    handleDrop = (e) =>{
        e.preventDefault()
        
        var data = e.dataTransfer.getData("colors")
        e.target.appendChild(document.getElementById(data))
        e.target.style.backgroundColor=data;
        console.log('Dropped!',data)
    
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
                    draggable = "true" 
                    onDragStart={(e)=>this.handleDrag(e)} 
                    onDragOver={(e)=>this.allowDrop(e)} 
                    onDrop={(e)=>this.handleDrop(e)}>{clors.ids} 
                 </button>

                 : <button 
                    id={clors.color} 
                    draggable = "false" 
                    onDragStart={(e)=>this.handleDrag(e)} 
                    onDragOver={(e)=>this.allowDrop(e)} 
                    onDrop={(e)=>this.handleDrop(e)}>{clors.ids} 
                 </button> }

             </div>  ))}

              
            </div>
        )
    }

}
export default PadInput;