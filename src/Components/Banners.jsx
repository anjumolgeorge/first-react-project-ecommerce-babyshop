import React from 'react';

const Banners = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '100%',
  };

  const imageStyle = {
    maxWidth: '100%',
    marginBottom: '1rem',
    transition: 'transform 0.3s ease',
    borderRadius: '8px',
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  const smallerScreenMediaQuery = '@media (max-width: 768px)';

  return (
    <div style={containerStyle}>
      <img
        style={{
          ...imageStyle,
          [smallerScreenMediaQuery]: {
            maxWidth: '95%',
            borderRadius: '4px',
          },
        }}
        src="https://cdn.fcglcdn.com/brainbees/banners/luvlap_upto40_hns_cat_july'231689917895358.jpg"
        alt=""
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <img
        style={{
          ...imageStyle,
          [smallerScreenMediaQuery]: {
            maxWidth: '80%',
            borderRadius: '4px',
          },
        }}
        src="https://www.chicco.in/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw68ea3c80/images/Chicco%20Home/Child%20Age%20Component/0-6/cosmetic_0x6m_350x350_06_11_2022.png"
        alt=""
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />

      <img
        style={{
          ...imageStyle,
          [smallerScreenMediaQuery]: {
            maxWidth: '80%',
            borderRadius: '4px',
            marginRight: '10px',
          },
        }}
        src="https://www.chicco.in/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw909642ac/images/Chicco%20Home/Child%20Age%20Component/compressed-age-limit/0-6/0-6img2.jpg"
        alt=""
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <img
        style={{
          ...imageStyle,
          [smallerScreenMediaQuery]: {
            maxWidth: '80%',
            borderRadius: '4px',
            marginRight: '10px',
          },
        }}
        src="https://www.chicco.in/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw3caf0267/images/Chicco%20Home/Child%20Age%20Component/compressed-age-limit/0-6/0-6img1.jpg"
        alt=""
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />

      <img
        style={{
          ...imageStyle,
          [smallerScreenMediaQuery]: {
            maxWidth: '80%',
            borderRadius: '4px',
          },
        }}
        src="https://www.chicco.in/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dwe83345d4/Chicco%20Website%20Banner%20Stroller%20&%20Car%20Seat-05.jpg"
        alt=""
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
    </div>
  );
};

export default Banners;
