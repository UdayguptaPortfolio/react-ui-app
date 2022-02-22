import React from 'react'
import '../styles/offers.css';

const OfferCard = ({img,text,desc}) => {
  return (
    <div className="offers-box-container">
        <div className="o-box">
          <div className="bar"></div>
          <img src="logo192.png" alt="1"/>
          <h4>{text}</h4>
          <p>{desc} 
          </p>
          <button className="o-btn">Read More</button>
        </div>
      </div>
  )
}

export default OfferCard;