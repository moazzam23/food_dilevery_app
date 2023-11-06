import React from 'react'
import "./Header.scss"
import {AiOutlineDown} from "react-icons/ai"
import img from "../Assets/col1.png"
import img1 from "../Assets/col 2.png"
import img3 from "../Assets/col 3.png"
import img2 from "../Assets/rider.png"
import img4 from "../Assets/partner.png"
import img5 from "../Assets/college.png"
import img6 from "../Assets/download.png"


const Work = () => {
  const scrollNextH1 = () => {
    const h1Tags = document.querySelectorAll('h1');
    const currentY = window.scrollY;

    for (let i = 0; i < h1Tags.length; i++) {
      const h1Y = h1Tags[i].getBoundingClientRect().top + window.scrollY;

      if (h1Y > currentY) {
        window.scrollTo({
          top: h1Y,
          behavior: 'smooth',
        });
        break;
      }
    }
  };
  return (
    

    <div className='work'>
        <hr />
  <div> 
         <h1>How Its Work </h1>
        <i onClick={scrollNextH1}><AiOutlineDown/></i>
        </div>
        <hr className='line'/>

        <div className="container1">
        <div className="column">
            <img src={img} alt="col1"/>
             
            <h2>Step 1</h2>
            <p>Enter your Location. Type in your address or <br/>pin your location by enabling location service</p>
            </div>
        <div className="column"> 
        <img src={img1} alt="col2"/> 
        <h2>Step 2</h2>
        <p> Now select a resturant and a menu item. You are one step closer to a one bite perfect quick bit </p>
        </div>
        <div className="column">
            <img src={img3} alt="col3" />
            <h2>Step 3</h2>
            <p>Settle your payment. Then sit back and <br/>relax as we make your food ready</p>
            </div>
            </div>

            <hr className='line2'/>
  <div className='sb'>   
         <h1 className='subheading'>Work with Quick Bite </h1>
        <i className='icon'><AiOutlineDown/></i>
        </div>
        <hr className='line'/>

<div className='rider'>
    <img src={img2} alt="rider" />
   <div className='container2'> 
   <h2>Rides With Us</h2>
    <p>Earn Money by delivering food from the the resturant. All you need is a skills and a bike</p>
   <br/> <button>Ride with Us</button>
   </div>
</div>

<hr className='line'/>


<div className='partner'>
    <img src={img4} alt="partner" />
   <div className='container2'> 
   <h2>As A Partner</h2>
    <p>Quick Bite Help Resturants Grow wit online Ordeing, Loyalty and Much More</p>
   <br/> <button>Partner with Us</button>
   </div>
</div>

<hr className='line'/>
        
<div className='partner'>
    <img src={img5} alt="partner" />
   <div className='container2'>
     <h2>As A Colleague</h2>
    <p>Be Part Of a team That is building a Top-Notch Delivery service</p>
   <br/> <button>Work with Us</button>
   </div>
</div>

<hr className='line2'/>
  <div className='sb'>   
         <h1 className='subheading'>Download Our App </h1>
        <i className='icon'><AiOutlineDown/></i>
        </div>
        <hr className='line'/>

        <div className='partner'>
   <div className='container2'> <h2>Order Easily!</h2>
    <p>Get the most tstful bites deliver to your door step with Quickbite. Our fastest delivery service carry a variety of cuisines from local resturants </p>
   <br/> <button>  Download </button>
   </div>
    <img src={img6} alt="download" />
</div>
<hr className='line'/>


        </div>
  )
}

export default Work
