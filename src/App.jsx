import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from './components/Loading';
import GameBoy from './components/GameBoy'; 

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
    <div className="App">
      {isLoading && <Loading isVisible={isVisible} />}
      
      {!isLoading && (
        <div>
          <GameBoy />
        </div>
      )}
    </div>
  );
}

export default App;
