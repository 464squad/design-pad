import React from 'react';
import '../css/PadInput.css';

const ControlPanel = (props) => {
  const { padInputTF, drag } = props;
   return (
       <table className={`padInput ${padInputTF}`}>
         <tbody>
          <tr>
            <td id="1" draggable="true" onDragStart={drag}>1</td>
            <td id="2" draggable="true" onDragStart={drag}>2</td>
          </tr>
          <tr>
            <td id="3" draggable="true" onDragStart={drag}>3</td>
            <td id="4" draggable="true" onDragStart={drag}>4</td>
          </tr> 
          <tr>
            <td id="5" draggable="true" onDragStart={drag}>5</td>
            <td id="6" draggable="true" onDragStart={drag}>6</td>
          </tr>
          <tr>
            <td id="7" draggable="true" onDragStart={drag}>7</td>
            <td id="8" draggable="true" onDragStart={drag}>8</td>
          </tr>           
         </tbody>
       </table>
   )
}

function PadInput(props){
  const { padInputTF, drag } = props;
  return (
    <ControlPanel
      padInputTF={padInputTF}
      drag={drag}
    />
  );
}

export default PadInput;
