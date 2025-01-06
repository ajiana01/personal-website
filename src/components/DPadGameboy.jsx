import React, { useState } from 'react';
import './DPadGameboy.css';

const DPadGameboy = () => {
    const [direction, setDirection] = useState('');

  const handleKeyUp = (e) => {
    switch (e.key) {
      case 'ArrowLeft':
        setDirection('left');
        break;
      case 'ArrowRight':
        setDirection('right');
        break;
      case 'ArrowUp':
        setDirection('up');
        break;
      case 'ArrowDown':
        setDirection('down');
        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    // <div className="container-dpad">
    //   <nav className={`d-pad ${direction}`}>
    //     <a className="up" href="#">Up</a>
    //     <a className="right" href="#">Right</a>
    //     <a className="down" href="#">Down</a>
    //     <a className="left" href="#">Left</a>
    //   </nav>
    // </div>

    <div class="wrapper">
        <div class="center">
            <div class="center-circle"></div>
        </div>
        
        <div class="up">
            <div class="up-triangle"></div>
        </div>

        <div class="right">
            <div class="right-triangle"></div>
        </div>
        <div class="down">
            <div class="down-triangle"></div>
        </div>

        <div class="left">
            <div class="left-triangle"></div>
        </div>
    </div>

  );
};

export default DPadGameboy;