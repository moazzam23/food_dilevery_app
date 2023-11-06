import React from 'react'
import "./Login.scss"
import img from "../Assets/Track.png"
import Footer from "./Footer"
import { useNavigate } from 'react-router-dom'
import {RxAvatar} from "react-icons/rx" 

const Track = () => {
 
  const navigate= useNavigate();
  function handlesee(){
    navigate("/Track")
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
  <div className='track'>
    <img src={img} alt="image"/>
    <label className='lb1'>Thank You For Your Purchase!</label>
      <button  onClick={handlesee}>Track</button>
    </div>
      <Footer/>
</>
    
    )

}
export default Track;