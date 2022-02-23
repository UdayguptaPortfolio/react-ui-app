import React from "react";
import {faDesktop} from '@fortawesome/free-solid-svg-icons';
import {faPuzzlePiece} from '@fortawesome/free-solid-svg-icons';
import {faKey} from '@fortawesome/free-solid-svg-icons';
import {faStar} from '@fortawesome/free-solid-svg-icons';
// import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
// import {faList} from '@fortawesome/free-solid-svg-icons';
// import {faLifeRing} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/amazingfeatures.css";
import FeatureDescCard from "./featuredesccard";
import FeaturesInformationCard from "./featuresinformationcard";
const AmazingFeatures = () => {
  return (
    <>
      <div className="amazing-features-container">
        <div className="features-heading">
        <div className='keyiconbg'>
              <FontAwesomeIcon icon={faKey} className='keyicon'></FontAwesomeIcon>
              </div>
          <h2>
            {" "}
            AMAZING{" "}
            <b>
              <strong>FEATURES</strong>
            </b>
          </h2>
          <h4>
            With unlimited features that we offer,we promise it possible to make
            everything that was impossible for you !
          </h4>
        </div>
        <div className="left-features">
          <FeaturesInformationCard
            text="RESPONSIVE & MULTIPURPOSE"
            desc="Proin in imagine a ipsum viverra scelerisq enec turp.Nunc"
            icon={faDesktop}
          />
          <FeaturesInformationCard
            text="RESPONSIVE & MULTIPURPOSE"
            desc="Proin in imagine a ipsum viverra scelerisq enec turp.Nunc"
            icon={faPuzzlePiece}
          />
          <FeaturesInformationCard
            text="RESPONSIVE & MULTIPURPOSE"
            desc="Proin in imagine a ipsum viverra scelerisq enec turp.Nunc"
            icon={faStar}
          />
        </div>
        <div className="right-features">
          <img
            className="image1"
            src="feature1.jpg"
            width="350px"
            height="420px"
            alt="1"
          />
          <img
            className="image2"
            src="feature2.jpg"
            width="410px"
            height="300px"
            alt="2"
          />
        </div>
      </div>
      {/* <div className='container'>
        <div className='wrapper'>
          <div className='cardcontainer'>
          <div className='card'>
                   <div className='cardicon'>
                   <FontAwesomeIcon icon={faDesktop} className='desktopicon'></FontAwesomeIcon> 
                   </div>
                   <div className='cardcontent'>
                       <h4>RESPONSIVE & MULTIPURPOSE</h4>
                       <span>Desktops,Tablets & Phones</span>
                       <p>This is one of the best technology in the market which one can use</p>
                   </div>
                   </div>
                   <div className='card'>
                   <div className='cardicon'>
                   <FontAwesomeIcon icon={faDesktop} className='desktopicon'></FontAwesomeIcon> 
                   </div>
                   <div className='cardcontent'>
                       <h4>RESPONSIVE & MULTIPURPOSE</h4>
                       <span>Desktops,Tablets & Phones</span>
                       <p>This is one of the best technology in the market which one can use</p>
                   </div>
                   </div>
                   <div className='card'>
                   <div className='cardicon'>
                   <FontAwesomeIcon icon={faDesktop} className='desktopicon'></FontAwesomeIcon> 
                   </div>
                   <div className='cardcontent'>
                       <h4>RESPONSIVE & MULTIPURPOSE</h4>
                       <span>Desktops,Tablets & Phones</span>
                       <p>This is one of the best technology in the market which one can use</p>
                   </div>
                   </div>
                   <div className='card'>
                   <div className='cardicon'>
                   <FontAwesomeIcon icon={faDesktop} className='desktopicon'></FontAwesomeIcon> 
                   </div>
                   <div className='cardcontent'>
                       <h4>RESPONSIVE & MULTIPURPOSE</h4>
                       <span>Desktops,Tablets & Phones</span>
                       <p>This is one of the best technology in the market which one can use</p>
                   </div>
                   </div>
                   <div className='card'>
                   <div className='cardicon'>
                   <FontAwesomeIcon icon={faDesktop} className='desktopicon'></FontAwesomeIcon> 
                   </div>
                   <div className='cardcontent'>
                       <h4>RESPONSIVE & MULTIPURPOSE</h4>
                       <span>Desktops,Tablets & Phones</span>
                       <p>This is one of the best technology in the market which one can use</p>
                   </div>
                   </div>
                    <div className='card'>
                   <div className='cardicon'>
                   <FontAwesomeIcon icon={faDesktop} className='desktopicon'></FontAwesomeIcon> 
                   </div>
                   <div className='cardcontent'>
                       <h4>RESPONSIVE & MULTIPURPOSE</h4>
                       <span>Desktops,Tablets & Phones</span>
                       <p>This is one of the best technology in the market which one can use</p>
                   </div>
                   </div>
            </div>
        </div>
      </div> */}
      {/* <div className="second-feature"> */}
        <FeatureDescCard/>
          {/* icon={faDesktop}
          text="RESPONSIVE & MULTIPURPOSE"
          title="Desktops,Tablets,Phones"
          desc="Proin in imagine a ipsum viverra scelerisq enec turp.Nunc Proin in imagine a ipsum viverra scelerisq enec turp.Nunc Proin in imagine a ipsum viverra scelerisq enec turp.Nunc"
        /> */}
        {/* <FeatureDescCard
          icon={faPuzzlePiece}
          text="RESPONSIVE & MULTIPURPOSE"
          title="Desktops,Tablets,Phones"
          desc="Proin in imagine a ipsum viverra scelerisq enec turp.Nunc Proin in imagine a ipsum viverra scelerisq enec turp.Nunc Proin in imagine a ipsum viverra scelerisq enec turp.Nunc"
        />
        <FeatureDescCard
          icon={faStar}
          text="RESPONSIVE & MULTIPURPOSE"
          title="Desktops,Tablets,Phones"
          desc="Proin in imagine a ipsum viverra scelerisq enec turp.Nunc Proin in imagine a ipsum viverra scelerisq enec turp.Nunc Proin in imagine a ipsum viverra scelerisq enec turp.Nunc"
        />
        <FeatureDescCard
          icon={faShoppingCart}
          text="RESPONSIVE & MULTIPURPOSE"
          title="Desktops,Tablets,Phones"
          desc="Proin in imagine a ipsum viverra scelerisq enec turp.Nunc Proin in imagine a ipsum viverra scelerisq enec turp.Nunc Proin in imagine a ipsum viverra scelerisq enec turp.Nunc"
        />
        <FeatureDescCard
          icon={faList}
          text="RESPONSIVE & MULTIPURPOSE"
          title="Desktops,Tablets,Phones"
          desc="Proin in imagine a ipsum viverra scelerisq enec turp.Nunc Proin in imagine a ipsum viverra scelerisq enec turp.Nunc Proin in imagine a ipsum viverra scelerisq enec turp.Nunc"
        />
        <FeatureDescCard
          icon={faLifeRing}
          text="RESPONSIVE & MULTIPURPOSE"
          title="Desktops,Tablets,Phones"
          desc="Proin in imagine a ipsum viverra scelerisq enec turp.Nunc Proin in imagine a ipsum viverra scelerisq enec turp.Nunc Proin in imagine a ipsum viverra scelerisq enec turp.Nunc"
        /> */}
      {/* </div> */}
    </>
  );
};

export default AmazingFeatures;
