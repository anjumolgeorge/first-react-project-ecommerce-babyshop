import React from 'react';

const Banners = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginLeft:'79px',
   
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '750px',
    gap:'10px', 
    marginBottom: '1rem',
    transition: 'transform 0.3s ease',
    borderRadius:'80px'
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = 'scale(1.05) translateX(-5%)'; 
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = 'scale(1) translateX(-5%)';
  };

  return (
    <div style={containerStyle}>
      <div style={rowStyle}>
        <img
          style={{ ...imageStyle }}
          src="https://www.babycarestores.in/media/media/collections/Artboard_4.jpg"
          alt=""
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />

        <img
          style={{
            ...imageStyle,
            transform: 'translateX(-5%)', 
          }}
          src="https://www.babycarestores.in/media/media/collections/photo_2023-09-23_10-14-07.jpg"
          alt=""
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
      </div>

      <img
        style={{ ...imageStyle }}
        src="https://www.babycarestores.in/media/media/collections/Web-banner.jpg"
        alt=""
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
    </div>
  );
}

export default Banners;
