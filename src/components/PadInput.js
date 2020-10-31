import React from 'react';

const numbers = ['1', '2', '3','4','5','6','7','8'];

function PadInput() {
      return (
        <div>
            {numbers.map(nums => (
                <li key = {index}>
                    {nums}
                </li>
            ))}
            <p className="input"> {nums} </p>
            
        </div>

  )
}


 
export default PadInput;