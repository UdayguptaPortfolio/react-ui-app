import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/priceplans.css';
const PriceCard = ({planName,cost,desc1,desc2,desc3,desc4,desc5}) => {
  return (
    <div className="price-box-container">
    <div className="price-box">
      {/* <div className="price-bar"></div> */}
      <button className='price-cardsbutton'>{planName}</button>
      <h4>$ <strong>{cost}</strong> Monthly</h4>
      <hr/>
      <div className='price-details'>
      <p>{desc1}</p>
      <p>{desc2}</p>
      <p>{desc3}</p>
      <p>{desc4}</p>
      <p>{desc5}</p>
      </div>
      <hr/>
      <button className="price-btn">SIGN UP NOW</button>
      <div className="price-bar"></div> 
    </div>
  </div>
  )
}

export default PriceCard;