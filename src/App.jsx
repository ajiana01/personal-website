import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from './components/Loading';
import GameBoy from './components/GameBoy';
import CircleButtonGameboy from './components/CircleButtonGameboy';
import RoundSquareButtonGameboy from './components/RoundSquareButtonGameboy';
import PlayButtonLottie from './components/PlayButtonLottie';
import DPadGameboy from './components/DPadGameboy';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulasi waktu loading
    const timer = setTimeout(() => {
      setIsVisible(false); // Mulai animasi fade-out
      setTimeout(() => setIsLoading(false), 500); // Tunggu animasi selesai sebelum menghapus dari DOM
    }, 3000); // Waktu loading 3 detik

    return () => clearTimeout(timer);
  }, []);

  return (
    // <div className="App">
    //   {isLoading && <Loading isVisible={isVisible} />}
      
    //   {!isLoading && (
    //     <div>
    //       <GameBoy />
    //       <CircleButtonGameboy onClick={() => alert('Button clicked!')} />
    //       <RoundSquareButtonGameboy onClick={() => alert('Button clicked!')} />
    //       <PlayButtonLottie />
    //       {/* <DPadGameboy /> */}
    //     </div>
    //   )}
    // </div>
    <div></div>
  );
}

export default App;
