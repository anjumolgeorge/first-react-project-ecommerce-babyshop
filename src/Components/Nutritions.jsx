import React, { useContext } from 'react';
import ShopNav from './ShopNav';
import { userLogin } from '../App';
import { Button, Card, CardBody, CardImg, CardTitle, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Nutritions = () => {

 const {product}=useContext(userLogin)
 const navigate=useNavigate()
 const filterNutrition =product.filter((item)=>item.category==='nutrition')
  return (
    <div style={{backgroundColor:'lightgrey'}}>
      
<ShopNav/> 


      
     <img style={{height:'25rem' , width:'95%', marginTop:'20px'}} src="https://www.cerelac.co.uk/sites/default/files/2023-06/m-banner-prod-wheat_with_milk.jpg" alt="" />
   
      <Container>
        <h1 style={{ textAlign: "center", padding: "10px" }}>Nutritions</h1>
        <hr />

        <div className="d-flex align-items-center justify-content-center flex-wrap">
          {filterNutrition.map((item) => (
            <div
              key={item.Id}
              className="d-flex align-items-center justify-content-center flex-wrap"
            >
              <Card
                className="shadow p-3 m-2 bg-body-tertiary rounded"
                style={{
                  width: "18rem",
                  height: "28rem",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardBody>
                  <CardImg
                    style={{ height: "15rem" }}
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
                  <h6 style={{ textAlign: "center" }}>Price:{item.Price}</h6>
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


export default Nutritions;


