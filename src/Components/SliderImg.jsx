import React from 'react';

function SliderImg({ img, id }) {
  return (
    <img
      className="d-block w-100"
      src={img}
      alt="Slide"
      id={id}
    />
  );
}

export default SliderImg;

