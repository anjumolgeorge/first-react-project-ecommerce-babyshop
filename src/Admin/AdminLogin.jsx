import React, { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import {useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminLogin = () => {
  const Navigate =useNavigate()
  const adminName=useRef()
  const adminPassword=useRef()
  const [error,setErrorMessage]=useState('')
const handleAdmin=()=>{
  const newAdminName =adminName.current.value
  const newAdminPassword= adminPassword.current.value

if(!newAdminName||!newAdminPassword){
  setErrorMessage('Please in all fields')
  return;
}
if(newAdminName !=='admin'){
  setErrorMessage('Please enter your userName')
  return;
}
if(newAdminPassword !=='admin789'){
  setErrorMessage('please enter correct password')
}
const Admin = newAdminName === 'admin' && newAdminPassword === 'admin789'

if (Admin) {
  toast.success ('Admin Login Success')
  Navigate ('/adminPage')
} else {
  toast.error("please enter valid username or password")
}
}
  return (
    <div style={{background:'pink'}}>
              <Container style={{background:'pink',width:'650px',alignItems:'center',height:'500px',borderRadius:'20px',marginTop:'5rem',border:'solid 5px'}}>

          <div style={{background:'lightpink',borderRadius:'20px',width:'500px',marginTop:'55px',marginLeft:'68px',border:'solid 3px'}}>

            <h1 style={{paddingTop:'20px',fontFamily:'cursive'}}>Admin Login</h1>
            <br/>
                <br/>
                
                <form>
                    <input style={{height:'40px',width:'300px',borderRadius:'10px'}}
                    ref={adminName}
                    type='text'
                    placeholder='UserName...'


                     />
                     <br/>
                     <br/>
                     <br/>
                     <input  style={{height:'40px',width:'300px',borderRadius:'10px'}}
                     ref={adminPassword}
                     type='Password'
                     placeholder='Password'
                     />
                     <br/><br/>
                     {error && (
                      <p>{error}</p>
                     )}
                    
             <div>
                   <button onClick={handleAdmin} style={{borderRadius:'5px',width:'60px',transition: 'background 0.3s ease'}}
                    onMouseEnter={(e) => (e.target.style.background = 'darkgray')}
                    onMouseLeave={(e) => (e.target.style.background = 'gray')}>LogIn</button>
                   </div>
                   
                </form>
                <br/>
                </div>

        </Container>
    </div>
  );
}

export default AdminLogin;


