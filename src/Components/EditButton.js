import React, {Component} from 'react';


class EditButton extends Component{
    constructor(props){
       super(props) 
       this.state={
        background: 'black',
        editActive: false
       }
    }
    
    // editOn=(props)=>{
    //     return(
    //     <button onClick={props.onClick}>
    //     Edit On
    //   </button>
    //     )
    // }
    // editOff=(props)=>{
    //     return(
    //     <button onClick={props.onClick}>
    //     Edit Off
    //     </button>
    //     );
    // }

   handleClickEditOn =(event) =>{
     
       this.setState({
           background : 'red', editActive:true})
   }
   
   
   handleClickEditOff =(event) =>{

       this.setState({
       background: 'black', editActive:false})
   }
  
    render(){
        // const editActive =this.state.editActive
        // let button;
        // if(editActive){
        //     button =<editOn onClick ={()=>this.handleClickEditOn() }/>
        // }
        // else{
        //     button = <editOff onClick ={()=>this.handleClickEditOff()}/>
        // }
        return(

<div>                
            
    <button className = "editbutton" onClick ={()=>this.handleClickEditOn()}  style ={{backgroundColor:this.state.background} } >Edit</button>
</div>

        )
    }

}
export default EditButton;