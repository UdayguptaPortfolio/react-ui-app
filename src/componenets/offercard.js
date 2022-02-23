import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/offers.css';

const OfferCard = ({icon,text,desc}) => {
  return (
    <div className="offers-box-container">
        <div className="o-box">
          <div className="bar"></div>
          <FontAwesomeIcon icon={icon} className='cardsearchicon'></FontAwesomeIcon>
          {/* <img src="logo192.png" alt="1"/> */}
          <h4>{text}</h4>
          <p>{desc} 
          </p>
          <button className="o-btn">Read More</button>
        </div>
      </div>
  )
}

export default OfferCard;