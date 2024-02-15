import React from 'react';
import Card from 'react-bootstrap/Card';
import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import { LuBadgePercent } from "react-icons/lu";
import { HiTrophy } from "react-icons/hi2";

function Extracards() {
  const cardStyle = {
    width: '18rem',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer',
    backgroundColor: 'lightblue',
  };

  const hoverEffect = {
    backgroundColor: 'lightcoral',
  };

  const iconSize = 50; 

  const handleMouseOver = (e) => {
    e.currentTarget.style.backgroundColor = hoverEffect.backgroundColor;
    e.currentTarget.querySelector('svg').style.transform = 'translate(5px, -5px)'; 
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.backgroundColor = cardStyle.backgroundColor;
    e.currentTarget.querySelector('svg').style.transform = 'translate(0, 0)';
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Card style={{ ...cardStyle }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <Card.Body>
          <TbTruckDelivery size={iconSize} />
          <Card.Text>
            <h5>8 Hours Delivery <br/> All Kerala</h5>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ ...cardStyle }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <Card.Body>
          <LuBadgePercent size={iconSize} />
          <Card.Text>
            <h4>Free Delivery <br/>Orders Above ₹500</h4>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ ...cardStyle }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <Card.Body>
          <HiTrophy size={iconSize} />
          <Card.Text>
            <h4>Win a <br/>Rewards</h4>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ ...cardStyle }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <Card.Body>
          <GiReturnArrow size={iconSize} />
          <Card.Text>
            <h4>Easy Return</h4>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Extracards;
