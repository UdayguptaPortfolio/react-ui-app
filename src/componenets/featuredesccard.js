import React from 'react'
import "../styles/featuredesccard.css"

const FeatureDescCard = ({text,title,desc}) => {
  return (
      <>
    <div className="features-desc-box-container">
        <div className="f-d-box">
          <div className="bar"></div>
          <img src="logo192.png" alt="1"/>
          <h4>{text}</h4>
          <p>{desc} 
          </p>
        </div>
      </div>
      </>
  )
}

export default FeatureDescCard;