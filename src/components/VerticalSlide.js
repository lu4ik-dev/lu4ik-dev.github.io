import React from 'react';

const VerticalSlide = ({ slideNumber }) => {
  return (
    <div
      className="swiper-slide"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1f1f1', // Soft color for background
        height: '100vh',
        fontSize: '24px',
      }}>
      Vertical Slide {slideNumber}
    </div>
  );
};

export default VerticalSlide;
