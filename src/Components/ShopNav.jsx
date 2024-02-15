import React from 'react';
import {  Container,Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const ShopNav = () => {
    const navigate=useNavigate()
  return (
   <>
   
   <Navbar expand="lg" className="bg-body-tertiary" sticky='top'>
      <Container fluid>
        <Navbar.Brand ><h2 style={{color:'red' , fontFamily:'monospace'}} onClick={()=>navigate("/")}>Baby World</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={()=>navigate('/Cloth')}>Clothes</Nav.Link>
            <Nav.Link onClick={()=>navigate('/nutritions')}>Nutrition</Nav.Link>
            <Nav.Link onClick={()=>navigate('/toy')}>Toy</Nav.Link>
            <Nav.Link onClick={()=>navigate('/Essentials')}>BabyCare</Nav.Link>
          </Nav>
         
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
   
   </>
  );
}

export default ShopNav;
