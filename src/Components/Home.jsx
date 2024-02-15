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
    <div style={{ backgroundColor: 'lightgrey' }}>
      <NavBar />
      <Slider />

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '5% 0', padding: '0 10px' }}>
        <div style={{ flex: '1', textAlign: 'center' }}>
          <h1 style={{ color: '#FE7F9C', fontFamily: 'cursive', fontSize: '5vw' }}>
            Stylish Outfits and Hot
            <p>Toys for Babies</p>
          </h1>
          <p>
            <h6 style={{ color: 'brown', fontSize: '2vw' }}>
              Get <h3 style={{ color: 'red', fontFamily: 'cursive' }}>35% off</h3> Latest Baby products !!*
            </h6>
          </p>
          <button
            style={{
              backgroundColor: 'pink',
              borderRadius: '4px',
              color: 'red',
              padding: '1vw 2vw',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
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
            style={{ maxWidth: '100%', height: 'auto' }}
            src='/babypic.png'
            alt='cover'
          />
        </div>
      </div>
      
      <Banners />
      <Extracards/>
      
      <Footer />
    </div>
  );
};

export default Home;
