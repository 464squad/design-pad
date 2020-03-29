import React from 'react';
import './DesignBox.css';

const handleBox = (event, props) => {
  const { color } = props;
  document.getElementById(event.target.id).style.backgroundColor = color;
};

const DesignBox = props => {
  return (
    <div className='DesignBox__container'>
      <div
        id='box1'
        onDragEnter={e => {
          handleBox(e, props);
        }}
        className='DesignBox__boxes'
      ></div>
      <div
        id='box2'
        onDragEnter={e => {
          handleBox(e, props);
        }}
        className='DesignBox__boxes'
      ></div>
      <div
        id='box3'
        onDragEnter={e => {
          handleBox(e, props);
        }}
        className='DesignBox__boxes'
      ></div>
      <div
        id='box4'
        onDragEnter={e => {
          handleBox(e, props);
        }}
        className='DesignBox__boxes'
      ></div>
    </div>
  );
};

export default DesignBox;
