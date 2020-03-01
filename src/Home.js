import React from 'react';
import './Home.css';
import {NavLink } from "react-router-dom";


function Home() {
  return (
    <div className="Home">
      <div id='header' >
        <NavLink to={"/SignUp"} exact id='signup' className='btn' >SignUp</NavLink>
        <NavLink to={"/Login"} exact id='login' className='btn' >Login</NavLink>
      </div>
    </div>
  );
}

export default Home;
