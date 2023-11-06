import React from 'react'
import "../Components/Header.scss"
import img from "../Assets/lemon.png"
import img1 from "../Assets/main.png"
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  function handlesearch(){
navigate("/foodshow")

  }
  return (
    <div className='main'>
        <div>
        <img src={img} alt="main pic" /> 
        <h1>The Quickest Way to <br/> Find the Perfect Bite</h1>
     <img className='image1' src={img1} alt="pizza"/>
        </div>
       <div className='search'>
         <div class="input-container">
    <input type="text" placeholder="Delivery Address" class="input-with-icon" />
</div>
        <button  onClick={handlesearch} class="search-button">Search</button>
        </div>
        
        </div>
  
  )
}

export default Main
