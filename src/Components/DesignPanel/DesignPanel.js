import React from 'react';
import './DesignPanel';

const handleDrag = (e, color) => {};

const DesignPanel = () => {
  return (
    <div className='DesignPanel__container'>
      <button id='1' className='DesignPanel__button'>
        1
      </button>
      <button id='2' className='DesignPanel__button'>
        2
      </button>
      <button id='3' className='DesignPanel__button'>
        3
      </button>
      <button id='4' className='DesignPanel__button'>
        4
      </button>
      <button id='5' className='DesignPanel__button'>
        5
      </button>
      <button id='6' className='DesignPanel__button'>
        6
      </button>
      <button id='7' className='DesignPanel__button'>
        7
      </button>
      <button id='8' className='DesignPanel__button'>
        8
      </button>
    </div>
  );
};

export default DesignPanel;
