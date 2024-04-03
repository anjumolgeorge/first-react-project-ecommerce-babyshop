import React, { useContext } from 'react';
import ShopNav from './ShopNav';
import { userLogin } from '../App';
import { Button, Card, CardBody, CardImg, CardTitle, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Cloth = () => {
  const { product } = useContext(userLogin);
  const navigate = useNavigate();
  const filterCloth = product.filter((item) => item.category === "cloth");

  return (
    <div style={{ backgroundColor: '#808080' }}>

      <ShopNav />

      <img style={{ marginTop: '20px', width: '100%', height: 'auto' }} src="https://www.babycarestores.in/media/media/collections/CLOTHING_ESSENTIAL.jpg" alt="" />

      <Container>
        <h1 style={{ textAlign: "center", padding: "10px",fontFamily: 'cursive',color : '#FBFCFC',fontSize:'6rem' }}>Cloths</h1>
        <hr />

        <div className="d-flex align-items-center justify-content-center flex-wrap">
          {filterCloth.map((item) => (
            <div
              key={item.id}
              className="d-flex align-items-center justify-content-center flex-wrap"
              style={{ width: '100%', maxWidth: '300px' }} 
            >
              <Card
                className="shadow p-3 m-2 bg-body-tertiary rounded"
                style={{
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardBody>
                  <CardImg
                    style={{ width: "100%", height: "15rem", objectFit: 'cover' }} 
                    className="p-2"
                    variant="top"
                    src={item.image}
                  />
                  <br />
                  <br />
                  <CardTitle style={{ textAlign: "center" }}>
                    {item.title}
                  </CardTitle>
                  <br />
                  <h6 style={{ textAlign: "center" }}>Price: {item.Price}</h6>
                </CardBody>
                <div>
                  <Button
                    onClick={() => navigate(`/viewproduct/${item.id}`)}
                    variant="outline-dark"
                  >
                    View Product
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Cloth;
