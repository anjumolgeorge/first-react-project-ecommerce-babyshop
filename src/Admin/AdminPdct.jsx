import React, { useContext } from "react";
import SideBar from "./SideBar";
import { Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../App";

const AdminPdct = () => {
  const { product, setProduct } = useContext(userLogin);
  const navigate = useNavigate();
  const Remove = (id) => {
    const newUpdate = product.filter((item) => item.id !== id);
    setProduct(newUpdate);
  };
  return (
    <div style={{ display: "flex",background:'pink' }}>
      <SideBar />

      <Container
        fluid
        className="mt-3"
        style={{ overflow: "scroll", height: "90vh",background:'pink'}}
      >
        <h1 className="mb-4" style={{ textAlign: "center",fontFamily:'cursive',color:'green' }}>
        Products List
        </h1>
        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th style={{fontFamily:'cursive'}}>Id</th>
              <th style={{fontFamily:'cursive'}}>Image</th>
              <th style={{fontFamily:'cursive'}}>Name</th>
              <th style={{fontFamily:'cursive'}}>Price</th>
              <th style={{fontFamily:'cursive'}}>Actual Price</th>
              <th style={{fontFamily:'cursive'}}>Category</th>
              <th style={{fontFamily:'cursive'}}>Stock</th>
              <th style={{fontFamily:'cursive'}}>Action</th>
            </tr>
            {product.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td style={{ textAlign: "center" }}>
                  <img
                    style={{ height: "2rem" }}
                    src={item.image}
                    alt={item.title}
                  />
               </td>
                <td>{item.title}</td>
                <td>{item.OldPrice}</td>
                <td>{item.Price}</td>
                <td>{item.category}</td>
                <td>{item.stock}</td>
                <td style={{ textAlign: "center" }}>
                  <button 
                    style={{color:'white', marginRight: "30px",borderRadius:'10px',background:'gray', transition: 'background 0.3s ease'}}
                    onClick={() => navigate(`/editproduct/${item.id}`)}
                    onMouseEnter={(e) => (e.target.style.background = 'darkgray')}
                    onMouseLeave={(e) => (e.target.style.background = 'gray')}
                  >
                    Edit
                  </button>
                  <button style={{color:'white',borderRadius:'10px',background:'gray',
                  transition: 'background 0.3s ease'}}onClick={() => Remove(item.id)}
                  onMouseEnter={(e) => (e.target.style.background = 'darkgray')}
                  onMouseLeave={(e) => (e.target.style.background = 'gray')}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </thead>
        </Table>
      </Container>
    </div>
  );
};

export default AdminPdct;



