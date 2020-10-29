

import React from 'react'
import {Row,Col} from 'react-flexbox-grid'
import PadInput from '../PadInput/PadInput'
import DesignBoard from '../DesignBoard/DesignBoard'

const DesignContainer=(props)=>{
	

	return (
	<div>
		
           <Row style={{justifyContent:'center'}}>
           	  <Col lg={2} md={2} sm={8} xs={8} style={{marginBottom:'30px'}}>
                     <PadInput/>

           	  </Col>
           	  <Col lg={8} md={8} sm={12} xs={12} >
                  <div style={{border:'1px solid red',height:''}}>
                  	 <DesignBoard/>
                  </div>
           	  </Col>
           </Row>

	</div>)
}


export default DesignContainer;