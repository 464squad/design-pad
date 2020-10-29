
import React from 'react'
import DesignPad from '../DesignPad/DesignPad'
import {Row,Col} from 'react-flexbox-grid'

const DesingBoard=(props)=>{


	return (
<div style={{padding:'9px'}}>
	DesingBoard

	<Row>
		<Col lg={4} md={4} sm={4} xs={4}  >
              <DesignPad />
		</Col>
<Col lg={4} md={4} sm={4} xs={4}>
              <DesignPad/>
		</Col>
		<Col lg={4} md={4} sm={4} xs={4}>
              <DesignPad/>
		</Col>
		<Col lg={4} md={4} sm={4} xs={4}>
              <DesignPad/>
		</Col>
		<Col lg={4} md={4} sm={4} xs={4}>
              <DesignPad/>
		</Col>
		<Col lg={4} md={4} sm={4} xs={4}>
              <DesignPad/>
		</Col>


		
	</Row>
</div>
		)
}

export default DesingBoard