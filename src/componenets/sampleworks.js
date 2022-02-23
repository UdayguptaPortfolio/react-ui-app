import React, { useState } from "react";
import "../styles/sampleworks.css";
import { images } from "../imageData/imagedata";
import { allImages } from "../imageData/imagedata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const SampleWorks = () => {
  const [click, setClick] = useState(true);
  const clicked = () => {
    setClick(!click);
    console.log(click);
  };

  return (
    <div className='container'>
      <div className='heading'>
        <h2>SAMPLE  <b>
               <strong>WORKS</strong>
            </b></h2>
        <h4>
          Let's take a look at some of the best of our works here , we love them
          and hope you too
        </h4>
      </div>
      <div className='photosection'>
        <div className='photocontainer'>
          {click
            ? images.map((item) => (
                <div className='photo'>
                  <div className='bgcontainer'>
                    <FontAwesomeIcon
                      icon={faSearch}
                      className='topicon'
                    ></FontAwesomeIcon>
                    <h6>Corporate Brochure</h6>
                    <p>Illustration/Print</p>
                    <FontAwesomeIcon
                      icon={faHeart}
                      className='bottomicon'
                    ></FontAwesomeIcon>
                  </div>
                  <img
                    className='onephoto'
                    src={`/images/${item.img}`}
                    alt="not available"
                  ></img>
                </div>
              ))
            : allImages.map((item) => (
                <div className='photo'>
                  <div className='bgcontainer'>
                    <FontAwesomeIcon
                      icon={faSearch}
                      className='topicon'
                    ></FontAwesomeIcon>
                    <h6>Corporate Brochure</h6>
                    <p>Illustration/Print</p>
                    <FontAwesomeIcon
                      icon={faHeart}
                      className='bottomicon'
                    ></FontAwesomeIcon>
                  </div>
                  <img
                    className='onephoto'
                    src={`/images/${item.img}`}
                    alt="not available"
                  ></img>
                </div>
              ))}
        </div>
      </div>
      <div className='longbutton'>
        {click ? (
          <button onClick={clicked}>View all works</button>
        ) : (
          <button onClick={clicked}>All works</button>
        )}
      </div>
    </div>
  );
};
export default SampleWorks;
