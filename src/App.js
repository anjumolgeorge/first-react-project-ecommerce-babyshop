import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Shop from './Components/Shop';
import About from './Components/About';
import Toy from './Components/Toy';
import Cloth from './Components/Cloth';
import Nutritions from './Components/Nutritions';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import { createContext, useState } from 'react';
import ViewPrdct from './Components/ViewPrdct';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from './Components/Cart';
import BabyCare from './Components/BabyCare';
import { products } from './Components/ProductData';
import AdminLogin from './Admin/AdminLogin';
import AdminPage from './Admin/AdminPage';
import AdminPdct from './Admin/AdminPdct';
import AdminAddPdct from './Admin/AdminAddPdct';
import ViewOrder from './Admin/ViewOrder';
import Users from './Admin/Users';
import EditProduct from './Admin/EditProduct'



export const userLogin=createContext();

function App() {
 const [user,setUser]= useState([])
 const[login,setLogin]=useState(null)
 const[product,setProduct] =useState(products)
 const [cart,setCart]=useState(false)
 const [buy,setBuy]= useState([])
 const [search,setSearch]=useState('')



  return (
    <>
   
    <div className="App">
      <userLogin.Provider value={{user,setUser,login,setLogin,product,setProduct,cart,setCart,buy,setBuy,search,setSearch}}>
      

      
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Shops' element={<Shop/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/Cloth' element={<Cloth/>}></Route>
      <Route path='/toy' element={<Toy/>}></Route>
      <Route path='/nutritions' element={<Nutritions/>}></Route>
      <Route path='/SignUp' element={<SignUp/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Essentials' element={<BabyCare/>}></Route>
      <Route path='/viewproduct/:id'element = {<ViewPrdct/>}></Route>
      <Route path='/cart' element = {<Cart/>}></Route>
      <Route path='/adminlogin' element={<AdminLogin/>}/>
      <Route path='/adminPage' element={<AdminPage/>}/>
      <Route path='/adminproduct' element ={<AdminPdct/>}/>
      <Route path='/adminaddproduct' element ={<AdminAddPdct/>}/>
      <Route path='/vieworder' element ={<ViewOrder/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/editproduct/:id' element = {<EditProduct/>}/>

    </Routes>
    </BrowserRouter>
    </userLogin.Provider>
    <ToastContainer />
    </div>
    </>
  );
}

export default App;
