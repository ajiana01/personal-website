import React from 'react';
import './Loading.css';

function Loading({ isVisible }) {
  return (
    // <div className={`loading-container ${!isVisible ? 'hidden' : ''}`}>
    //   <div className="cat">
    //     <div className="cat__head"></div>
    //     <div className="cat__body"></div>
    //     <div className="cat__body"></div>
    //     <div className="cat__tail"></div>
    //   </div>
    // </div>
  <div className={`loading-container ${!isVisible ? 'hidden' : ''} box`}>
    <div className="cat">
      <div className="cat__body"></div>
      <div className="cat__body"></div>
      <div className="cat__tail"></div>
      <div className="cat__head"></div>
    </div>
  </div>

  );
}

export default Loading;
