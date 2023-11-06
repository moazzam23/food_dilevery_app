import React from 'react';
import '../App.scss';

const Footer = () => {
  return (
    <div className='footer'>
        <div>
          <h1>Quick <br/> Bites</h1>
        </div>
        <div className='f1'>
          <p>Social</p>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>LindkeIN</p>
        </div>
        <div className='f2'>
          <p>Get Help</p>
          <p>Partner with Us</p>
          <p>Add your Restaurant</p>
          <p>Sign up to deliver</p>
        </div>
        <div className='f2'>
          <p>Read Our Blog</p>
          <p>Buy Gift Cards</p>
          <p>Restaurants Near By</p>
          <p>Save on First Order</p>
        </div>
      </div>
     );
}

export default Footer;
