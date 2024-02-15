import React, { useContext, useState } from 'react';
import { userLogin } from '../App';
import SideBar from './SideBar';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { product, setProduct } = useContext(userLogin);
  const editProduct = product.find((item) => item.id === parseInt(id));

  const [Title, settitle] = useState(editProduct.title);
  const [price, setPrice] = useState(editProduct.Price);
  const [oldprice, setOldPrice] = useState(editProduct.OldPrice);
  const [Category, setCategory] = useState(editProduct.category);
  const [Image, setImage] = useState(editProduct.image);
  const [Stock, setstock] = useState(editProduct.stock);

  const submit = (e) => {
    e.preventDefault();
    const updatedProduct = {  
      ...editProduct,
      image: Image,
      title: Title,
      OldPrice: oldprice,
      Price: price,
      category: Category,
      stock: Stock,
    };

    const updatedProducts = product.map((item) =>
      item.id === parseInt(id) ? updatedProduct : item
    );

    setProduct(updatedProducts);
    toast.success('Successfully edited');
    navigate('/adminproduct');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#ff69b4' }}>
      <div style={{ width: '400px', padding: '20px', border: '1px solid #ced4da', borderRadius: '8px', backgroundColor: '#fff' }}>
        <h4 style={{ marginBottom: '20px', textAlign: 'center' }}>Edit Product</h4>
        <form onSubmit={submit}>
          <label>Edit img src:</label>
          <input
            type="text"
            name="image"
            value={Image}
            onChange={(e) => setImage(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box' }}
          />

          <label>Edit product name:</label>
          <input
            type="text"
            name="title"
            value={Title}
            onChange={(e) => settitle(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box' }}
          />

          <label>Edit Price:</label>
          <input
            type="text"
            name="OldPrice"
            value={oldprice}
            onChange={(e) => setOldPrice(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box' }}
          />

          <label>Edit Actual Price:</label>
          <input
            type="text"
            name="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box' }}
          />

          <label>Edit Category:</label>
          <select
            name="Category"
            value={Category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box' }}
          >
            <option value="Cloth">Cloths</option>
            <option value="nutritions">Nutritions</option>
            <option value="toy">Toy</option>
            <option value="babycare">BabyCare</option>
          </select>

          <label>Edit Stock:</label>
          <input
            type="text"
            name="stock"
            value={Stock}
            onChange={(e) => setstock(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box' }}
          />

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button type="submit" style={{ backgroundColor: '#ff1493', color: '#fff', padding: '10px', flex: '1', marginRight: '5px' }}>
              Save
            </button>
            <button type="button" onClick={() => navigate('/adminproduct')} style={{ backgroundColor: '#6c757d', color: '#fff', padding: '10px', flex: '1' }}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
