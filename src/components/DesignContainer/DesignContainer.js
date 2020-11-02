

import React,{useState} from 'react'
import {Row,Col} from 'react-flexbox-grid'
import PadInput from '../PadInput/PadInput'
import DesignBoard from '../DesignBoard/DesignBoard'

const DesignContainer=(props)=>{
   
   const [draggable,setDraggable]=useState(false)
   // onClick edit button, setDraggable to true if it is false and viceversa.

   const Edit=(e)=>{
   

          if(draggable){
            setDraggable(false)
          }else{
            setDraggable(true)
          }
          return;
   }
	

	return (
	<div >                                                            {/*change button color; if edit true: 'red' else 'black'*/}
  <button onClick={Edit} style={{float:'right',padding:'8px 10px',background:draggable?'red':'black',color:'white'}}>Edit</button>
		
           <Row style={{justifyContent:'center'}}>
           	  <Col lg={2} md={2} sm={8} xs={8} style={{marginBottom:'30px',overflow:'',marginTop:'20px'}}>
                     <PadInput draggable={draggable}/> {/* pass state draggable to PadINput component*/}

           	  </Col>
           	  <Col lg={8} md={8} sm={12} xs={12} >
                  <div >
                  	 <DesignBoard/>
                  </div>
           	  </Col>
           </Row>

	</div>)
}


export default DesignContainer;