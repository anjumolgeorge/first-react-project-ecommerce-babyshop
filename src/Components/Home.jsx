import React from 'react';
import NavBar from './NavBar';
import Slider from './Slider';
import './SliderImg.css';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import Banners from './Banners';
import Extracards from './Extracards';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#808080' }}>
      <NavBar />
      <Slider />

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '5% 0',
          padding: '0 10px',
        }}
      >
        <div style={{ textAlign: 'center', flex: '1', maxWidth: '600px' }}>
          <h1
            style={{
              color: 'white',
              fontFamily: 'cursive',
              fontSize: '6vw',
          
            }}
          >
            Stylish Outfits and Hot
            <p>Toys for Babies</p>
          </h1>
          <p>
            <span style={{ color: 'pink', fontSize: '2vw' }}>
              Get <span style={{ color: 'yellow', fontFamily: 'cursive' }}>35% off</span> Latest Baby products !!*
            </span>
          </p>
          <button
            style={{
              backgroundColor: 'pink',
              borderRadius: '4px',
              color: 'red',
              padding: '1vw 2vw',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              fontSize: '2vw',
              
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = 'orange')}
            onMouseOut={(e) => (e.target.style.backgroundColor = 'pink')}
            onClick={() => navigate('/Shops')}
          >
            Shop NOW
          </button>
        </div>
        <div style={{ flex: '1', textAlign: 'center' }}>
          <img
            style={{ width: '100%', maxWidth: '60rem', height: 'auto' }}
            src='/babypic.png'
            alt='cover'
          />
        </div>
      </div>

      <Banners />
      <Extracards />

      <Footer />
    </div>
  );
};

export default Home;
