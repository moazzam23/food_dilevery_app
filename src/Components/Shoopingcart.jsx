import React , { useState}   from 'react'
import "./Shopingcart.scss"
import img2 from "../Assets/page3.jpg"
import img from "../Assets/a sandwich.png"
import img3 from "../Assets/page 1/chilli chiken.png"
import img4 from "../Assets/page 1/egg sandwhich.png"
import img8 from "../Assets/page 1/turkey sandwich.jpg"
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'

const Shoopingcart = () => {
  const navigate=useNavigate();
  function handlef(){
  navigate("/check")

  }
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return(
<>
<Header/>
<img className='imgcheck' src={img2} alt="serach2" />
    <div className='foodselect'>
      <div className='fd'>


<div class="input-container">
     
<input type="text" placeholder="Delivery Address" class="input-with-icon" />
</div>
<button  class="search-button">Search</button>
<div className='lable'>
<label>Popular</label>
<label>Breakfast</label>
<label>Sandwiches</label>
<label>Desserts</label>
    <div>
</div>
</div>
</div>
</div>
<div className='flex'>  
<div className='sandwich'>
<hr className='line' />

<h2>Sandwiches </h2>
    <hr/>
    <div>
      <h3> Artichoke Sandwitch</h3>
      <img  src={img} alt="pic"/>
</div>
       <label>Artichoke, Spanich , Cheddar and Mushrooms </label>
       <label className='lbp'  >$7.23</label>
       <label className='lbb' >Popular</label>
       <hr/>
       <div>
      <h3>Egg Sandwitch</h3>
      <img src={img3} alt="pic"/>
    </div>
       <label>Tomato, Mozzeralla topped with fried egg </label>
       <label className='lbp'  >$5.7</label>
       <label className='lbb' >Popular</label>
       <hr/>
       <div>
      <h3>Chilli Chicken</h3>
      <img src={img4} alt="pic"/>
    </div>
       <label>Chicken, Rocket with chill with mayyonnais</label>
       <label className='lbp'  >$24.23</label>
       <label className='lbb' >Popular</label>
       <hr/>
       <div>
      <h3>Turkey Sandwich</h3>
      <img src={img8} alt="pic"/>
    </div>
       <label>Turkey, Mozzeralla, Tomato and pesto</label>
       <label className='lbp'  >$7.23</label>
       <label className='lbb' >Popular</label>
       <hr/>

<hr className='line'/>


    </div>


<div className='side-bar'>
   <span>Shopping Cart</span>
<hr/>
<div className='title'> 
<p>Artichoke Sandwitch</p>
<span>$3.70</span>
</div>
<div className='quant'>
  <p>Quantity</p>
  <button   onClick={increment} id="increment">+</button>
  <label  id="counter">{count}</label>
  <button onClick={decrement} id="decrement" className='btn2'>-</button>
</div>
  <hr/>
  <div className='Subtotal'> 
    <p >Subtotal :</p>
   <span >$7.50 </span>
   </div>
   <div className='dc'>
   <p className='b1'>Delivery charges:</p>
   <span>$3.26</span>
   </div>
<div className='total'>

<p> Total :</p>
   <span>$10.76</span>
</div>
 <button  onClick={handlef}> Checkout </button>

    </div>
    

</div>
<Footer/>
</>
  )
}

export default Shoopingcart
