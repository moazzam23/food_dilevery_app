import React from 'react'
import "./Foodshow.scss"


const Cardpopup = ({ cardData, onClose }) => {
  return (
    <div className="card-popup">
    <div className="popup-content">
      <img src={cardData.image} alt={cardData.title} />
      <h2>{cardData.title}</h2>
      <p>{cardData.description}</p>
     <div className='pt'> 
     <label>Price</label>
      <p className='ppt2' >{cardData.price}</p>
      </div>
     <div className='pt' > 
     <label  >Delivery Time</label>
      <p className='ppt'>{cardData.Deliverytime}</p></div>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
  )
}

export default Cardpopup
