


import React,{useState} from 'react';
import {Row,Col} from 'react-flexbox-grid'

const PadInput=(props)=>{


	return (

		<div style={{border:'1px solid red',padding:'10px'}}>
			
			<Row >
				<Col lg={6} md={6} sm={3} xs={3} style={{justifyContent:'center',marginBottom:'10px'}}>
				   <div style={{height:'',width:'',border:'1px solid lightcoral',padding:'8px'}}>1</div>
				</Col>
				
					<Col lg={6} md={6} sm={3} xs={3} style={{justifyContent:'center',marginBottom:'10px'}}>
				   <div style={{height:'',width:'',border:'1px solid lightcoral',padding:'8px'}}>2</div>
				</Col>
				
					<Col lg={6} md={6} sm={3} xs={3} style={{justifyContent:'center',marginBottom:'10px'}}>
				   <div style={{height:'',width:'',border:'1px solid lightcoral',padding:'8px'}}>3</div>
				</Col>
				
					<Col lg={6} md={6} sm={3} xs={3} style={{justifyContent:'center',marginBottom:'10px'}}>
				   <div style={{height:'',width:'',border:'1px solid lightcoral',padding:'8px'}}>4</div>
				</Col>
				
					<Col lg={6} md={6} sm={3} xs={3} style={{justifyContent:'center',marginBottom:'10px'}}>
				   <div style={{height:'',width:'',border:'1px solid lightcoral',padding:'8px'}}>5</div>
				</Col>
				
					<Col lg={6} md={6} sm={3} xs={3} style={{justifyContent:'center',marginBottom:'10px'}}>
				   <div style={{height:'',width:'',border:'1px solid lightcoral',padding:'8px'}}>6</div>
				</Col>
				
					<Col lg={6} md={6} sm={3} xs={3} style={{justifyContent:'center',marginBottom:'10px'}}>
				   <div style={{height:'',width:'',border:'1px solid lightcoral',padding:'8px'}}>7</div>
				</Col>
				
					<Col lg={6} md={6} sm={3} xs={3} style={{justifyContent:'center',marginBottom:'10px'}}>
				   <div style={{height:'',width:'',border:'1px solid lightcoral',padding:'8px'}}>8</div>
				</Col>
				

			
				
			
			</Row>

		</div>)
}

export default PadInput;