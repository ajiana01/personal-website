import React from 'react';
import './GameBoy.css';
import CircleButtonGameboy from './CircleButtonGameboy';

function GameBoy() {
    return (
      <div className="gameboy">
        <div className="toggle-button"></div>
        <div className="screen"></div>
        <div className="text">
            <p className='top-text'>ANOMALI BOY</p>
            <p className='battery-text'>BATTERY</p>
            <p className='a-text'>A</p>
            <p className='b-text'>B</p>
            <p className='start-text'>START</p>
            <p className='select-text'>SELECT</p>
        </div>
        <div className="all-buttons">
          <CircleButtonGameboy/>
        </div>
      </div>
    );
  }

  
export default GameBoy;