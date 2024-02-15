import React, { useContext, useState } from "react";
import SideBar from "./SideBar";
import { Button, Form } from "react-bootstrap";
import { userLogin } from "../App";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminAddPdct = () => {
  const navigate = useNavigate();
  const { product, setProduct } = useContext(userLogin);
  const [newProduct, setNewProduct] = useState({
    title: "",
    image: "",
    oldPrice: "",
    price: "",
    category: "",
    stock: "",
  });

  const handleAdd = (e) => {
    e.preventDefault();

    if (
      !newProduct.image ||
      !newProduct.title ||
      !newProduct.oldPrice ||
      !newProduct.price ||
      !newProduct.category ||
      !newProduct.stock
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    const newProductList = {
      id: product.length + 1,
      image: newProduct.image,
      title: newProduct.title,
      OldPrice: newProduct.oldPrice,
      Price: newProduct.price,
      qty: 1,
      category: newProduct.category,
      stock: newProduct.stock,
    };

    setProduct([...product, newProductList]);
    toast.success("Product added successfully");
    navigate("/adminproduct");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <div style={{ display: "flex", background: "linear-gradient(to right, #4b6cb7, #182848)",}}>
      <SideBar />
      <div style={{ flex: 1, textAlign: "center", padding: "20px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1 style={{ color: "#4b6cb7",fontFamily:'cursive' }}>Add Products</h1>
          <Form style={{ width: "70%", marginTop: "20px" }}>
            <Form.Group controlId="formProductName">
              <Form.Label>Product Name:</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter product name"
                value={newProduct.title}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formOldPrice">
              <Form.Label>Price:</Form.Label>
              <Form.Control
                type="text"
                name="oldPrice"
                placeholder="Enter old price"
                value={newProduct.oldPrice}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label>Actual Price:</Form.Label>
              <Form.Control
                type="text"
                name="price"
                placeholder="Enter actual price"
                value={newProduct.price}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formStock">
              <Form.Label>Stock:</Form.Label>
              <Form.Control
                type="text"
                name="stock"
                placeholder="Enter stock"
                value={newProduct.stock}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formImage">
              <Form.Label>Image URL:</Form.Label>
              <Form.Control
                type="text"
                name="image"
                placeholder="Enter image URL"
                value={newProduct.image}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formCategory">
              <Form.Label>Category:</Form.Label>
              <Form.Control
                as="select"
                name="category"
                value={newProduct.category}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select category</option>
                <option value="Cloth">Cloths</option>
                <option value="nutritions">Nutritions</option>
                <option value="toy">Toy</option>
                <option value="babycare">BabyCare</option>
              </Form.Control>
            </Form.Group>
            <Button
              type="submit"
              variant="primary"
              onClick={handleAdd}
              style={{ backgroundColor: "#4b6cb7", border: "none", width: "100%" }}
            >
              Save
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AdminAddPdct;
