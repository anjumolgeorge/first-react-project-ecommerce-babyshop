import React, { useContext } from "react";
import SideBar from "./SideBar";
import { Container, Table } from "react-bootstrap";
import { userLogin } from "../App";
import './Common.css';


const ViewOrder = () => {
  const { buy } = useContext(userLogin);

  return (
    <div style={{background:'pink'}}className="d-flex">
      <SideBar />
      <Container fluid className="mt-3" style={{ overflow: "scroll", height: "90vh" }}>
        <div style={{ flex: "1", textAlign: "center" }}>
          <h1 className="mb-4">Order List</h1>
          <hr />
          <Table striped bordered hover responsive className="table-custom">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {buy.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>Rs:{item.Price}</td>
                  <td>{item.qty}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default ViewOrder;
