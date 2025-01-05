import React from 'react';
import './RoundSquareButtonGameboy.css';

function RoundSquareButtonGameboy({ onClick }) {
    return (
        <div className="roundsquare-button-gameboy-container">
            <button
                className="roundsquare-button-gameboy"
                onClick={onClick}
            />
        </div>
    );
  }
  
export default RoundSquareButtonGameboy;