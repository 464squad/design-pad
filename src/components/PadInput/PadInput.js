


import React,{useState,useEffect} from 'react';
import {Row,Col} from 'react-flexbox-grid'

const PadInput=(props)=>{


	useEffect(()=>{

     console.log(props.draggable)
	},[])

	var drag=(ev)=>{
		console.log(ev.target.innerText)

		ev.dataTransfer.setData('text',ev.target.innerText)
	}

	return (

		<div style={{border:'1px solid gray',padding:'10px'}}>
			
			<Row >
				<Col lg={6} md={6} sm={3} xs={3} style={{justifyContent:'center',marginBottom:'10px'}}>
				   <div style={{height:'',width:'',border:'1px solid lightcoral',padding:'8px',cursor:'pointer'}} 
				   draggable={props.draggable} // props from 'DesignContainer'

                   onDragStart={drag}
				   >1</div>
				</Col>
				
					<Col lg={6} md={6} sm={3} xs={3} style={{justifyContent:'center',marginBottom:'10px'}}>
				   <div style={{height:'',width:'',border:'1px solid lightcoral',padding:'8px'}} 
				   draggable={props.draggable}
				   onDragStart={drag}>2</div>
				</Col>
				
					<Col lg={6} md={6} sm={3} xs={3} style={{justifyContent:'center',marginBottom:'10px'}}>
				   <div style={{height:'',width:'',border:'1px solid lightcoral',padding:'8px'}}
				    draggable={props.draggable}
				   onDragStart={drag}>3</div>
				</Col>
				
					<Col lg={6} md={6} sm={3} xs={3} style={{justifyContent:'center',marginBottom:'10px'}}>
				   <div style={{height:'',width:'',border:'1px solid lightcoral',padding:'8px'}}
				    draggable={props.draggable}
				   onDragStart={drag}>4</div>
				</Col>
				
					<Col lg={6} md={6} sm={3} xs={3} style={{justifyContent:'center',marginBottom:'10px'}}>
				   <div style={{height:'',width:'',border:'1px solid lightcoral',padding:'8px'}}
				    draggable={props.draggable}
				   onDragStart={drag}>5</div>
				</Col>
				
					<Col lg={6} md={6} sm={3} xs={3} style={{justifyContent:'center',marginBottom:'10px'}}>
				   <div style={{height:'',width:'',border:'1px solid lightcoral',padding:'8px'}}
				    draggable={props.draggable}
				   onDragStart={drag}>6</div>
				</Col>
				
					<Col lg={6} md={6} sm={3} xs={3} style={{justifyContent:'center',marginBottom:'10px'}}>
				   <div style={{height:'',width:'',border:'1px solid lightcoral',padding:'8px'}}
				    draggable={props.draggable}
				   onDragStart={drag}>7</div>
				</Col>
				
					<Col lg={6} md={6} sm={3} xs={3} style={{justifyContent:'center',marginBottom:'10px'}}>
				   <div style={{height:'',width:'',border:'1px solid lightcoral',padding:'8px'}}
				    draggable={props.draggable}
				   onDragStart={drag}>8</div>
				</Col>
				

			
				
			
			</Row>

		</div>)
}

export default PadInput;