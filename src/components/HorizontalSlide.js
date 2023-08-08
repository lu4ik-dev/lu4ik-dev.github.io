import React from 'react';

const HorizontalSlide = ({ slideNumber }) => {
  return (
    <div
      className="swiper-slide"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1f1f1', // Soft color for background
        width: '100vw',
        fontSize: '24px',
      }}>
      Horizontal Slide {slideNumber}
    </div>
  );
};

export default HorizontalSlide;
