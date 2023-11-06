import React from "react";
import "../Components/Header.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  function handlelogin() {
    navigate ("/login");
  }
  
  
  return (
    <div className="header">
      <h1 onclick={handlelogin} >Quick Bite</h1>
      <div className="button-container">
        
          
          {/* Link to the login page */}
          <button onClick={handlelogin} className="button login-button">Sign In</button>
        
        <button className="button">Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
