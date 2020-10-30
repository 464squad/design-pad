import React from 'react';
import '../css/PadOutput.css';

const PadOutput = (props) => {
  return (
    <div class="padOutput">
      <div id="tl"></div>
      <div id="tr"></div>
      <div id="bl"></div>
      <div id="br"></div>
    </div>
  )
}

function DesignPad(props){
  return (
    <PadOutput/>
  );
}

export default DesignPad;
