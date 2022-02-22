import React from 'react'
import '../styles/featuresinfo.css'
const FeaturesInformationCard = ({text,desc}) => {
  return (
    <div className="features-box-container">
        <div className="f-box">
        <div className="f-bar">
        <img src="logo192.png" alt="1"/>
        <h4>{text}</h4>
          <p>{desc} 
          </p>
        </div>
        </div>
    </div>
  )
}

export default FeaturesInformationCard;