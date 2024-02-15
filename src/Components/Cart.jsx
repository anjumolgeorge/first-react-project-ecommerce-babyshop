import React, { useContext } from "react";
import {Button,Card, CardBody,CardImg, CardTitle, Container} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import NavBar from "./NavBar";
import { userLogin } from "../App";


const Cart = () => {
  const { cart, setCart,buy,setBuy,login} = useContext(userLogin);
  const navigate = useNavigate();

  const IncreaseQuantity = (id) => {
   login.cart.find((item)=>item.id===id).qty += 1
   setCart(!cart)
      }
  const DecreaseQuantity = (id) => {
    login.cart.find((item)=>item.id===id).qty -=1
    setCart(!cart)
  };  

  const removeItem = (id) => {
    const updatedCart = login.cart.filter((item) => item.id !== id);
    login.cart = updatedCart
    setCart(!cart);
  };

  const totalCartItem = (item) => {
    return item.Price * item.qty;
  };

  const buyProduct = (id) => {
    const productToBuy = login.cart.find((item) => item.id === id);
    if (productToBuy) {
      const updatedCart = login.cart.filter((item) => item.id !== id);
     login.cart = updatedCart
      setBuy([...buy, productToBuy]);
       toast.success("Successfully buy your product");
    }
  };
  const AllProduct = () => {
    setBuy((prevBuy)=>[...prevBuy, ...login.cart]);
    setCart(false);
    login.cart = []
  };

  const clearCart = () => {
    login.cart = []
    setCart(!cart);
  };

 return (
    <div style={{ background: "rgb(230, 230, 219)" }}>
     <NavBar/>
     <img/>
      <Container>
        <h2 style={{ textAlign: "center", padding: "10px" }}> My Cart</h2>
        <hr />
        <div className="d-flex align-items-center justify-content-center flex-wrap">
          {login&&login.cart.map((item) => (
            <div
              key={item.id}
              className="d-flex align-items-center justify-content-center flex-wrap"
            >
              <Card
                className="shadow p-1 m-2 bg-body-tertiary rounded"
                style={{
                  width: "18rem",
                  height: "31rem",
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
                  <CardTitle style={{ textAlign: "center" }}>
                    {item.title}
                  </CardTitle>
                  <h6 style={{ textAlign: "center" }}>Price: {item.Price}</h6>
                  <p style={{ textAlign: "center" }}>qty: {item.qty}</p>
                  <div style={{ textAlign: "center" }}>
                    <Button onClick={() => IncreaseQuantity(item.id)}> + </Button>
                    <Button onClick={() => DecreaseQuantity(item.id)}className="m-1" disabled={item.qty === 1}> - </Button>
                    <h6>Total: ₹{totalCartItem(item)}</h6>
                  </div>
                  <div>
                    <Button onClick={() => buyProduct(item.id)} variant="outline-dark"> Buy Product </Button>
                    <Button
                      className="m-2"
                      variant="outline-dark"
                      onClick={() => removeItem(item.id)}> Remove
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
        <div className=" p-5 " style={{ background: "rgb(230, 230, 219)" }}>
          <h2 className="pb-4" style={{ textAlign: "center" }}>
            Total Price: {login&&login.cart.reduce((acc,curr)=> acc +=curr.qty *parseInt(curr.Price),0)}
          </h2>
          <div style={{ textAlign: "center" }}>
            <Button onClick={() => navigate("/")}>Back To Home</Button>
            <Button className="m-2" onClick={AllProduct}> Buy All Product </Button>
            <Button onClick={clearCart} className="m-2">  Clear Cart</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;