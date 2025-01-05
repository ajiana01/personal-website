import React from 'react';
import './CircleButtonGameboy.css';

function CircleButtonGameboy({ onClick }) {
    return (
        <div className="circle-button-gameboy-container">
            <button
                className="circle-button-gameboy"
                onClick={onClick}
            />
        </div>
    );
  }
  
export default CircleButtonGameboy;