import React, { useState } from 'react';
import Lottie from 'react-lottie-player';
import animationData from '../../public/img/play_button_no_wm.json'; // Ubah path sesuai lokasi file JSON Anda

const LottieHoverAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{ width: '600px', height: '600px', cursor: 'pointer' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Lottie
        animationData={animationData}
        play={isHovered}
        loop={true} // Opsional: atur apakah animasi loop saat di-hover
        style={{ width: '100%', height: '100%' }}
        goTo={isHovered ? null : 0} // Kembali ke frame awal jika tidak di-hover
      />
    </div>
  );
};

export default LottieHoverAnimation;
