import React, { useState, useEffect, useRef } from "react";
import "./GameboyDevice.css";

const konamiCode = [
  "up",
  "up",
  "down",
  "down",
  "left",
  "right",
  "left",
  "right",
  "b",
  "a",
  "select",
  "start",
];

function TestingGameboy() {
  const [pressed, setPressed] = useState([]);
  const scrRef = useRef(null);
  const pwrRef = useRef(null);
  const screenRef = useRef(null);

  const handleButtonClick = (className) => {
    setPressed((prev) => {
      const newPressed = [...prev, className];
      if (
        newPressed.length === konamiCode.length &&
        newPressed.every((value, index) => value === konamiCode[index])
      ) {
        if (scrRef.current) {
          scrRef.current.innerHTML = "";
          scrRef.current.style.backgroundImage = "var(--kcode)";
        }
        return [];
      } else if (newPressed.length > konamiCode.length) {
        return [];
      }
      return newPressed;
    });
  };

  useEffect(() => {
    const pwr = pwrRef.current;
    const scr = scrRef.current;
    const screen = screenRef.current;

    const handlePowerClick = () => {
      if (pwr.style.left === "5px") {
        pwr.style.left = "-5px";
        scr.querySelector(".text").style.animation = "";
        screen.querySelector(".light").style.backgroundColor = "darkred";
        document.querySelector(".tip").style.visibility = "visible";
      } else {
        pwr.style.left = "5px";
        scr.querySelector(".text").style.animation = "sd 3s linear forwards";
        screen.querySelector(".light").style.backgroundColor = "red";
        setTimeout(() => {
          const audio = new Audio(
            "data:audio/mpeg;base64,SUQzAwAAAAABEFRJVDIAAAAXAAAAR2..."
          );
          audio.play();
          setTimeout(() => {
            audio.pause();
            audio.currentTime = 0;
          }, 4750);
        }, 2750);
        document.querySelector(".tip").style.visibility = "hidden";
      }
    };

    if (pwr) {
      pwr.addEventListener("click", handlePowerClick);
    }

    return () => {
      if (pwr) {
        pwr.removeEventListener("click", handlePowerClick);
      }
    };
  }, []);

  return (
    <div class="gameguy">
  <div class="onoff">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="pwswitch" ref={pwrRef}>
      {/* <div class="tip">
        click here
      </div> */}
    </div>
  </div>
  <div class="lines"></div>
  <div class="tophalf">
    <div class="screen" ref={screenRef}>
      <div class="highlight"></div>
      <p>
        Anomali matrix with stereo sound
      </p>
      <div class="light"></div>
      <div class="cscr" ref={scrRef}>
        <div class="text">
          Nuntundu
        </div>
      </div>
    </div>
  </div>
  <div class="bothalf">
    <div class="controls">
      <div class="dpad">
        <div class="up"  onClick={() => handleButtonClick("up")}></div>
        <div class="down" onClick={() => handleButtonClick("down")}></div>
        <div class="left" onClick={() => handleButtonClick("left")}></div>
        <div class="right" onClick={() => handleButtonClick("right")}></div>
        {/* <div class="updown">
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
        </div> */}
        <div className="updown">
              {[...Array(6)].map((_, index) => (
                <div className="line" key={`updown-${index}`}></div>
              ))}
            </div>
            <div className="leftright">
              {[...Array(6)].map((_, index) => (
                <div className="line" key={`leftright-${index}`}></div>
              ))}
            </div>
      </div>
      <div class="ss">
        <div class="select" onClick={() => handleButtonClick("select")}></div>
        <div class="start" onClick={() => handleButtonClick("start")}></div>
      </div>
      <div class="ab">
        <div class="a" onClick={() => handleButtonClick("a")}></div>
        <div class="b" onClick={() => handleButtonClick("b")}></div>
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