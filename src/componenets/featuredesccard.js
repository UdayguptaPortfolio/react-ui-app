import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/featuredesccard.css";

const FeatureDescCard = ({ text, title, desc,icon }) => {
  return (
    <>
      <div className='container'>
        <div className='wrapper'>
          <div className='cardcontainer'>
            <div className='card'>
              <div className='cardicon'>
                <FontAwesomeIcon
                  icon={icon}
                  className='desktopicon-feature'
                ></FontAwesomeIcon>
              </div>
              <div className='cardcontent'>
                <h4>{text}</h4>
                <span>{title}</span>
                <p>
                  {desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureDescCard;
