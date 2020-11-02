
import React, {useState} from 'react'

const DesignPad=(props)=>{

	const [background,setBackground]=useState('')

	var drop=(event)=>{

		event.preventDefault()
		event.stopPropagation()

		console.log(event.target)
		console.log(event.dataTransfer.getData('text'))
		console.log(typeof event.dataTransfer.getData('text'))

		// change color according to drag 'div' inner Text;

		switch(event.dataTransfer.getData('text')){

			case '1':
			  setBackground('blue');
			  break;
			 case '2':
			   setBackground('green');
			   break;

			  case '3':
			     setBackground('yellow');
			      break;

			  case '4':
			      setBackground('#7ce6b6');
			      break;
			   case '5':
			   	   setBackground('lightcoral');
			   	   break;
			   	case '6':
			   		setBackground("purple");
			   		 break;
			    case '7':
			     	setBackground('gray');
			     case '8':
			         setBackground('#615c5a');
			         break;

			    default:
			        setBackground('');
			        break;

		}
		
	}

	var allowDrop=(e)=>{

		e.preventDefault()
		e.stopPropagation();
		
	}

	return (

<div style={{border:'1px solid blue',height:'50px',padding:'30px',marginBottom:'8px',borderRadius:'9px',backgroundColor:background}}
 onDrop={(e)=>drop(e)}
 onDragOver={(e)=>allowDrop(e)}
>
	
</div>
		)
}

export default DesignPad;