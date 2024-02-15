import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, CardBody, CardImg, CardTitle,Container, Navbar,} from "react-bootstrap";
import { userLogin } from "../App";
import { toast } from "react-toastify";
const ViewPrdct = () => {
  const navigate = useNavigate();
  const { login, cart, setCart, product } = useContext(userLogin);
  const { id } = useParams();
  const filteredProduct = product.find((item) => item.id === parseInt(id));

  const AddCart = () => {
    if (login) {
     let cartItem = login.cart.find((item)=>item.id===filteredProduct.id)
     if(!cartItem){
      login.cart.push(filteredProduct)
      setCart(!cart)
     }
    } else {
      toast.warning("Please Register and Login");
      navigate("/login");
    }
  }
  
  console.warn(login);
  return (
    <div style={{ background: "rgb(230, 230, 219)" }}>
   <Navbar/>

      <Container className="d-flex justify-content-center align-items-center mt-5">
          <div key={filteredProduct.id} style={{ alignItems: "center" }}>
            <Card
              className="shadow p-1 m-2 bg-body-tertiary rounded"
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
                  src={filteredProduct.image}
                />
                <br />
                <CardTitle style={{ textAlign: "center" }}>
                  {filteredProduct.title}
                </CardTitle>
                <h6 style={{ textAlign: "center" }}>
                  Price : <del>{filteredProduct.OldPrice}</del>
                 </h6>
                <h6 style={{ textAlign: "center" }}>
                  Offer Price : {filteredProduct.Price}
                </h6>
                <p style={{ textAlign: "center" }}>baby : {filteredProduct.category}</p>
              </CardBody>
              <div>
                {login&&login.cart.find((cartItem) => cartItem.id === filteredProduct.id) ? (
                  <Button
                    variant="outline-dark"
                    onClick={() => navigate("/cart")}
                  >
                    Go To Cart
                  </Button>
                ) : (
                  <Button variant="outline-dark" onClick={AddCart}>
                    Add To Cart
                  </Button>
                    )}
              </div>
            </Card>
          </div>
      </Container>
    </div>
  );
};

export default ViewPrdct;