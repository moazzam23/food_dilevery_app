import React from 'react';
import "./Login.scss";
import { useNavigate } from "react-router-dom"

const Login = () => {
  
  const navigate = useNavigate();

function handleorder(){
  navigate("/order");
}

  return (
    <div className="login-container">
      <form className='loginform'>
        <h1>Create an account Or Login</h1>
      <label  className='Lable1' htmlFor="loginMethod">Login below or create a new Quickbite account </label>
      <div className="login-method-buttons">
        <button className='b1'>Login with Google</button>
        <button className='b2'>Login with Apple</button>
        <button className='b3'>Login with Facebook</button>
      </div>
<label className='or'> -------------------- OR Login with Email ---------------------- </label>
      
      <input type="email" id="gmail" placeholder="Email" />
      <button onClick={handleorder} className='next'>Next</button>
      </form>
    </div>
  );
}

export default Login
