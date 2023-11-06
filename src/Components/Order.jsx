import React from 'react'
import img from "../Assets/check out.png"
import {GiReceiveMoney} from "react-icons/gi"
import {MdOutlineDeliveryDining,MdOutlineToggleOff,MdOutlinePayment} from "react-icons/md"
import {AiOutlineRight} from "react-icons/ai";
import {RxDividerVertical} from "react-icons/rx"
import "./Ordercheck.scss"
import Footer from './Footer'
import img2 from "../Assets/a sandwich.png"
import { useNavigate } from 'react-router-dom'
import {RxAvatar} from "react-icons/rx"

const Ordercheck = () => {
  const navigate=useNavigate()
    function handletrack(){ 
      navigate("/track")}
  
      function handlelogin() {
        navigate ("/");
      }
  return (

    <>
        <div className='track-h'>
  <h1 onClick={handlelogin}>Quick Bite</h1>
  <i><RxAvatar/></i>
</div>

      <img className='imgcheck' src={img} alt="check out" />
   <div className='checkout-main'> 
    <div className='checkout'>
      <h1>Check Out</h1>
      <span>Bruncherie</span>
      <h2>Delivery Method and Time</h2>
    <hr/>
    
    <div>
      <i><MdOutlineDeliveryDining/></i>
      <h3>No contact Delivery</h3>
      <i className='reacticon'><AiOutlineRight/></i>
    </div>
       <label>Your Home Address Here</label>
       <hr/>
    
       <hr className='line'/>
    
    <div>
    <div className='i' ></div>
      <h3>No contact Delivery</h3>
      <i className='reacticon'><MdOutlineToggleOff/></i>
    </div>
       <label>Please Leave the Order In front of my door</label>
       <hr/>

 {/*Selected items*/ }

 <h2>Selected Items</h2>
    <hr/>
    
    <div>
      <i><RxDividerVertical/></i>
      <h3>1x     Artichoke Sandwitch</h3>
      <img src={img2} alt="pic"/>
    </div>
       <label>Your Home Address Here</label>
       <label className='lbp'  >$24.23</label>
       <label className='lbb' >Popular</label>
       <hr/>
    

{/*payment*/}
<h2>Payment Method</h2>
    <hr/>
    
    <div>
      <i><MdOutlinePayment/></i>
      <h3>Choose a payment method</h3>
      <i className='reacticon2'><AiOutlineRight/></i>
    </div>
       <label>Please add a payment method to continue with your order</label>
       <hr/>
    
       <hr className='line'/>
    
    <div>
     <i><GiReceiveMoney/></i>
      <h3>Tip For the courier</h3>
      <i className='reacticon'><AiOutlineRight/></i>
    </div>
       <label>Optional tip for the courier</label>
       <hr/> 
    </div>
    <div>
      <span></span>
      <hr/>

    </div>
    <div className='side-bar'>
   <span>Price Include VAT</span>
<hr/>
  <div className='Subtotal'> 
    <p>Subtotal :</p>
   <span >$7.50 <br/> $3.26</span>
   </div>
<div className='total'>

<p> Total :</p>
   <span>$10.76</span>
</div>
 <button  onClick={handletrack}> Proceed </button>
    </div>
    </div> 
    <Footer/>
    </>
    )
}
export default Ordercheck;
