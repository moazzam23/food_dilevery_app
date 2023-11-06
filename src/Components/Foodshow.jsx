import React , {useState} from 'react'
import Header from "./Header"
import img from "../Assets/searchpage.png"
import {AiOutlineDown} from "react-icons/ai"
import "./Foodshow.scss"
import Footer from "./Footer"

//import { useNavigate } from 'react-router-dom'
import Cardpopup from './Cardpopup'

const Foodshow = () => {
 
  //const naviagte = useNavigate();
  
 /* function handles(){
    naviagte("/food")
}*/
const [popupVisible, setPopupVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cardData = [
    {
      id: 1,
      title: 'Artichoke Sandwitch',
      image:'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHw2fHxmb29kfGVufDF8fHx8MTYzOTE1MzMzOQ&ixlib=rb-1.2.1&q=80&w=1080',
      description: 'Artichoke, Spanich , Cheddar and Mushrooms',
      price:'$24.70',
      Deliverytime:'25-35 mins',
    },
    // Add more card data objects as needed
  ];

  const openPopup = (card) => {
    setSelectedCard(card);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setSelectedCard(null);
    setPopupVisible(false);
  };

  return(
  <>
      <Header/>
    <div className='show'>
<img src={img} alt="serach"/>

         <div className="input-container">
    <input type="text" placeholder="Delivery Address" className="input-with-icon" />
</div>
        <button  className="search-button">Search</button>
<div className='lable'>
    <label>Open Now</label>
    <label>Free Delivery</label>
    <label>5 Stars</label>
</div>
<hr />
  <div> 
         <h1> New On Quickbite </h1>
        <i><AiOutlineDown/></i>
        </div>
        <hr className='line'/>
        <div className={`foodshow-content ${popupVisible ? 'blur' : ''}`}>
        <div className="card-row">
   {cardData.map((card) => (
          <div
          key={card.id}
          onClick={() => openPopup(card)} className="card card1 ">

<img src={cardData.image} alt={card.title} />
            <h2 className="card-heading">{card.title}</h2>
            <p className="card-description">{card.description}</p>
            <p className="card-price">{card.price}</p>
            <p className="card-delivery-time">{card.Deliverytime}</p>
  </div>
  ))} 
  </div>

  <div className="card card2">
    <div className="card-label"> 25-35 min</div>
    <h2 className="card-heading"> Mom's Soups</h2>
    <div className="card-price">$24.99</div>
  </div>

  <div className="card card3">
    <div className="card-label"> 25-35 min</div>
    <h2 className="card-heading">AvoBistro</h2>
    <div className="card-price">$24.99</div>
  </div>
  <div className="card card4">
    <div className="card-label">25-35 min</div>
    <h2 className="card-heading">Bruncherie</h2>
    <div className="card-price">$24.99</div><br/>
  </div>
</div>

  <hr />
  <div> 
         <h1>Popular Right Now</h1>
        <i ><AiOutlineDown/></i>
        </div>
        <hr className='line'/>
        
        <div className="card-row">
  <div className="card card1">

    <div className="card-label"> 25-35 min</div>
    <h2 className="card-heading">AvoBistro</h2>
    <div className="card-price">$19.99</div>
  </div>

  <div className="card card2">
    <div className="card-label"> 25-35 min</div>
    <h2 className="card-heading"> Pancakes</h2>
    <div className="card-price">$24.99</div>
  </div>

  <div className="card card3">
    <div className="card-label"> 25-35 min</div>
    <h2 className="card-heading">AvoBistro</h2>
    <div className="card-price">$24.99</div>
  </div>
  <div className="card card4">
    <div className="card-label">25-35 min</div>
    <h2 className="card-heading">Bruncherie</h2>
    <div className="card-price">$24.99</div><br/>
  </div>
  </div>

  <hr />
  <div> 
         <h1>Free Delivery</h1>
        <i className='iconp'><AiOutlineDown/></i>
        </div>
        <hr className='line'/>
        
        <div className="card-row">
  <div className="card card1">

    <div className="card-label"> 25-35 min</div>
    <h2 className="card-heading">Bruncherie</h2>
    <div className="card-price">$19.99</div>
  </div>

  <div className="card card2">
    <div className="card-label"> 25-35 min</div>
    <h2 className="card-heading"> Mom's Soups</h2>
    <div className="card-price">$24.99</div>
  </div>

  <div className="card card3">
    <div className="card-label"> 25-35 min</div>
    <h2 className="card-heading">AvoBistro</h2>
    <div className="card-price">$24.99</div>
  </div>
  <div className="card card4">
    <div className="card-label">25-35 min</div>
    <h2 className="card-heading">Bruncherie</h2>
    <div className="card-price">$24.99</div><br/>
  </div>  
  </div>

  </div>
{popupVisible && (
  <Cardpopup cardData={selectedCard} onClose={closePopup} />
)}
<Footer/>  
</>

    )
}
export default Foodshow;

