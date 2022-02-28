import React from "react";
import {faDesktop} from '@fortawesome/free-solid-svg-icons';
import {faPuzzlePiece} from '@fortawesome/free-solid-svg-icons';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {faList} from '@fortawesome/free-solid-svg-icons';
import {faLifeRing} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/featuredesccard.css";

const FeatureDescCard = ({ text, title, desc,icon }) => {
  return (
    <>
      {/* <div className='container'>
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
      </div> */}
      <div className='t-container'>
        <div className='wrapper'>
          <div className='cardcontainer'>
          <div className='card'>
                   <div className='cardicon'>
                   <FontAwesomeIcon icon={faDesktop} className='desktopicon-feature'></FontAwesomeIcon> 
                   </div>
                   <div className='cardcontent'>
                       <h4>RESPONSIVE & MULTIPURPOSE</h4>
                       <span>Desktops,Tablets & Phones</span>
                       <p>This is one of the best technology in the market which one can use</p>
                   </div>
                   </div>
                   <div className='card'>
                   <div className='cardicon'>
                   <FontAwesomeIcon icon={faPuzzlePiece} className='desktopicon-feature'></FontAwesomeIcon> 
                   </div>
                   <div className='cardcontent'>
                       <h4>RESPONSIVE & MULTIPURPOSE</h4>
                       <span>Desktops,Tablets & Phones</span>
                       <p>This is one of the best technology in the market which one can use</p>
                   </div>
                   </div>
                   <div className='card'>
                   <div className='cardicon'>
                   <FontAwesomeIcon icon={faStar} className='desktopicon-feature'></FontAwesomeIcon> 
                   </div>
                   <div className='cardcontent'>
                       <h4>RESPONSIVE & MULTIPURPOSE</h4>
                       <span>Desktops,Tablets & Phones</span>
                       <p>This is one of the best technology in the market which one can use</p>
                   </div>
                   </div>
                   <div className='card'>
                   <div className='cardicon'>
                   <FontAwesomeIcon icon={faShoppingCart} className='desktopicon-feature'></FontAwesomeIcon> 
                   </div>
                   <div className='cardcontent'>
                       <h4>RESPONSIVE & MULTIPURPOSE</h4>
                       <span>Desktops,Tablets & Phones</span>
                       <p>This is one of the best technology in the market which one can use</p>
                   </div>
                   </div>
                   <div className='card'>
                   <div className='cardicon'>
                   <FontAwesomeIcon icon={faList} className='desktopicon-feature'></FontAwesomeIcon> 
                   </div>
                   <div className='cardcontent'>
                       <h4>RESPONSIVE & MULTIPURPOSE</h4>
                       <span>Desktops,Tablets & Phones</span>
                       <p>This is one of the best technology in the market which one can use</p>
                   </div>
                   </div>
                    <div className='card'>
                   <div className='cardicon'>
                   <FontAwesomeIcon icon={faLifeRing} className='desktopicon-feature'></FontAwesomeIcon> 
                   </div>
                   <div className='cardcontent'>
                       <h4>RESPONSIVE & MULTIPURPOSE</h4>
                       <span>Desktops,Tablets & Phones</span>
                       <p>This is one of the best technology in the market which one can use</p>
                   </div>
                   </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default FeatureDescCard;
