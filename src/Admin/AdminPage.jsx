import React from 'react';
import SideBar from './SideBar';

const AdminPage = () => {
  return (
   <div style={{display:'flex'}}>
     <SideBar/>
      <div style={{background:'pink',flex:1,textAlign:'center',padding:'20px'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:"center",color:'darkblue'}}>

            <div style={{width:'800px',height:'600px',background:'rgb(0, 128, 128) ',borderRadius:'50px'}}>
          
              <h1 style={{color:'white',fontFamily:'cursive',marginTop:'100px'}}>Hello Admin!! <br/> <br/> <br/>Welcome...</h1>
             
              </div>
            </div>

        
      </div>
    </div>
  );
}

export default AdminPage;
