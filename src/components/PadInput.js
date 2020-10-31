import React from 'react';
import '../css/PadInput.css';

const Table = (props) => {
  const { padInputTF } = props;
   return (
       <table className={`padInput ${padInputTF}`}>
         <tr>
           <td >1</td>
           <td>2</td>
         </tr>
         <tr>
           <td>3</td>
           <td>4</td>
         </tr>
         <tr>
           <td>5</td>
           <td>6</td>
         </tr>
         <tr>
           <td>7</td>
           <td>8</td>
         </tr>
       </table>
   )
}

function PadInput(props){
  const { padInputTF } = props;
  return (
    <Table padInputTF={padInputTF}/>
  );
}

export default PadInput;
