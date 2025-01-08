import React from "react";
import "./TestingGameboy.css";


function TestingGameboy() {
  return (
    <div class="gameguy">
  <div class="onoff">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="pwswitch">
      {/* <div class="tip">
        click here
      </div> */}
    </div>
  </div>
  <div class="lines"></div>
  <div class="tophalf">
    <div class="screen">
      <div class="highlight"></div>
      <p>
        Dot matrix with stereo sound
      </p>
      <div class="light"></div>
      <div class="cscr">
        <div class="text">
          Nuntundu
        </div>
      </div>
    </div>
  </div>
  <div class="bothalf">
    <div class="controls">
      <div class="dpad">
        <div class="up"></div>
        <div class="down"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="updown">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="leftright">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
      <div class="ss">
        <div class="select"></div>
        <div class="start"></div>
      </div>
      <div class="ab">
        <div class="a"></div>
        <div class="b"></div>
      </div>
    </div>
    <div class="speaker">
      <div class="slot slot0"></div>
      <div class="slot slot1"></div>
      <div class="slot slot2"></div>
      <div class="slot slot3"></div>
      <div class="slot slot4"></div>
      <div class="slot slot5"></div>
    </div>
    <div class="hphone">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </div>
</div>
  );
}
export default TestingGameboy;