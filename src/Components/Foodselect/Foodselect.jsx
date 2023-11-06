import React from 'react'
import Header from '../Header';
import img2 from "../../Assets/page3.jpg"
import { useNavigate } from 'react-router-dom';
import img from "../../Assets/a sandwich.png"
import img3 from "../../Assets/page 1/chilli chiken.png"
import img4 from "../../Assets/page 1/egg sandwhich.png"
import img5 from "../../Assets/page 1/home made.png"
import img6 from "../../Assets/page 1/lemon mossue.jpg"
import img7 from "../../Assets/page 1/stawberry cheesecake.png"
import img8 from "../../Assets/page 1/turkey sandwich.jpg"
import "../Foodselect/Foodselect.scss"
import Footer from '../Footer';

const Foodselect = () => {
  
    const naviagte=useNavigate();

function handleshop(){
    naviagte ("/shop")
}
    return (
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

<div className='sandwich'>
<hr className='line' />
<h2>Sandwiches </h2>
    <hr/>
    
    <div>
      <h3> Artichoke Sandwitch</h3>
      <figure>
      <img onClick={handleshop}  src={img} alt="pic"/>
      <figcaption>+</figcaption>
</figure>
    </div>
       <label>Artichoke, Spanich , Cheddar and Mushrooms </label>
       <label className='lbp'  >$7.23</label>
       <label className='lbb' >Popular</label>
       <hr/>
       <div>
      <h3>Egg Sandwitch</h3>
      <figure>

      <img src={img3} alt="pic"/>
      <figcaption>+</figcaption>
      </figure>
    </div>
       <label>Tomato, Mozzeralla topped with fried egg </label>
       <label className='lbp'  >$5.7</label>
       <label className='lbb' >Popular</label>
       <hr/>
       <div>
      <h3>Chilli Chicken</h3>
      <figure>

      <img src={img4} alt="pic"/>
      <figcaption>+</figcaption>
      </figure>
    </div>
       <label>Chicken, Rocket with chill with mayyonnais</label>
       <label className='lbp'  >$24.23</label>
       <label className='lbb' >Popular</label>
       <hr/>
       <div>
      <h3>Turkey Sandwich</h3>
     <figure>

      <img src={img8} alt="pic"/>
      <figcaption>+</figcaption>
     </figure>
    </div>
       <label>Turkey, Mozzeralla, Tomato and pesto</label>
       <label className='lbp'  >$7.23</label>
       <label className='lbb' >Popular</label>
       <hr/>

<hr className='line'/>
       <h2>Desserts</h2>
    <hr/>
    
    <div>
      <h3>Strawberry Cheesecake</h3>
      <figure>
        
      <img src={img7} alt="pic"/>
      <figcaption>+</figcaption>
      </figure>
    </div>
       <label>Top with fresh strawberries and mint</label>
       <label className='lbp'  >$4.23</label>
       <label className='lbb' >Popular</label>
       <hr/>
       <div>
      <h3>Lemon Moussela</h3>
      <figure>

      <img src={img6} alt="pic"/>
      <figcaption>+</figcaption>
      </figure>
    </div>
       <label>Top with fresh lemon and berries</label>
       <label className='lbp'  >$4</label>
       <label className='lbb' >Popular</label>
       <hr/>   <div>
      <h3>Homemade Granalo</h3>
<figure>

      <img src={img5} alt="pic"/>
      <figcaption>+</figcaption>
</figure>
    </div>
       <label>Garanalo, Greek Yougart with fresh Peach</label>
       <label className='lbp'  >$4.3</label>
       <label className='lbb' >Popular</label>
       <hr/>
       </div>
</div>

      </div>
      </div>
   <Footer/>
    </>
    )
}

export default Foodselect
