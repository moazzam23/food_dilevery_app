import React from 'react'
import img from "../Assets/map.png"
import "./Login.scss"
import { useNavigate } from 'react-router-dom'
import {RxAvatar} from "react-icons/rx"

const Trackmap = () => {

  const navigate = useNavigate();
  function handleback(){
    navigate("/Trackb")
  }
  function handlelogin() {
    navigate ("/");
  }

  return (
    <>
    <div className='track-h'>
  <h1 onClick={handlelogin}>Quick Bite</h1>
  <i><RxAvatar/></i>
</div>
      <img className='trackimg' src={img} alt="map" />
    <div className='track-main'>
    <div className='track-map'>

      <h2>Order Status</h2>
    <hr/>
    
    <div>
      <i> 1</i>
      <h3>Almost There</h3>
    </div>
       <label>Your Order is being Prepared Now</label>
       <hr/>
    
    
    <div>
    <i>2</i> 
         <h3>Done</h3>
    </div>
       <label>Your Order is ready and is being delivered Now</label>
       <hr/>
<div>
<i>3</i> 
 <h3>Delivered ! </h3>
    </div>
       <label>Your order has been delivered</label>
       <hr/>
    </div>

    <div className='side-bar'>
   <span>35 min</span>
   <p>Untill Delivered</p>
<hr/>
<p className='para'> your perfect and quick bite will be there shortly! you can come back here to track your order</p>
 
 <button on onClick={handleback}> Hide My Status</button>
    </div>
    </div>
    </>  )
}

export default Trackmap;
