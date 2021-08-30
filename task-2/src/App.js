import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {
  const [users,setUsers] = useState();
  const getUsers = async() => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    setUsers(data.data);
  };
  return (
    <>
      <header className="Navbar">
        <h1>Let's Grow More Clients</h1>
        <div className="btn" onClick={getUsers}><b>Get Users</b></div>
      </header>
      <div className="row">
        {users?.map((userdata,index) => {
          return(
            <div className="card column" key={index}>
              <img src={userdata.avatar} className="card-img-top" alt=" ... "/>
              <div className="card-body">
                <h3 className="card-title">
                  {userdata.first_name} {userdata.last_name}
                </h3>
                <h4 className="card-rtext">{userdata.email}</h4>
              </div>

            </div>
          );
        })}  
      </div>  
      </>   
  );
}
export default App;