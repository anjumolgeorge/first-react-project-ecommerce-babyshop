import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import SideBar from "./SideBar";
import { userLogin } from "../App";


const Users= () => {

  const { user } = useContext(userLogin);


  return (
    <div style={{ display: "flex",background:'pink' }}>
      <SideBar/>
      <div
        className="mt-4"
        style={{ backgroundColor: "white", width: "70%", margin: "0 auto" }}
      >
        <h1 className="mb-4" style={{ textAlign: "center" }}>
          Users
        </h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>User Name</th>
              <th>E-mail</th>
            </tr>
          </thead>
          {user.map((item) => (
            <tbody>
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default Users;