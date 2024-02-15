import React, { useContext } from 'react';
import ShopNav from './ShopNav';
import { userLogin } from '../App';
import { Button, Card, CardBody, CardImg, CardTitle, Container,Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Shop = () => {

 const {product,search,setSearch}=useContext(userLogin)
 const navigate=useNavigate();
 const Searches=product.filter((srch)=>{
  if(search===''){
    return srch;
  }else if(srch.title.toLowerCase().includes(search.toLowerCase())){
    return srch;
  }else{
    return ''
  }
})
  return (
    <div style={{backgroundColor:'lightgrey'}}>
      
<ShopNav/> 

<Form className=" m-4"  >
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                style={{height:'45px',width:'250px'}}
                />
            </Form>
      
<img src="https://www.babycarestores.in/media/media/landingpageSlider/WEB_BANNER_NEW_BORN_Yws7Hws.jpg" alt="" />
   
      <Container>
        <h1 style={{ textAlign: "center", padding: "10px" }}>Collections</h1>
        <hr />

        <div className="d-flex align-items-center justify-content-center flex-wrap">
          {Searches.map((item) => (
            <div
              key={item.id}
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
                  <CardTitle style={{ textAlign: "center" }}> {item.title}  </CardTitle>
                  <br />
                  <h6 style={{ textAlign: "center" }}>Price:{item.Price}</h6>
                </CardBody>
                <div>
                  <Button onClick={() => navigate(`/viewproduct/${item.id}`)}variant="outline-dark">View Product</Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}


export default Shop;
