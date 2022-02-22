import React from "react";
import "../styles/amazingfeatures.css";
import FeatureDescCard from "./featuredesccard";
import FeaturesInformationCard from "./featuresinformationcard";
const AmazingFeatures = () => {
  return (
    <>
      <div className="amazing-features-container">
        <div className="features-heading">
          <i className="arrow right"></i>
          <h2>
            {" "}
            AMAZING{" "}
            <b>
              <strong>FEATURES</strong>
            </b>
          </h2>
          <i className="arrow left"></i>
          <h4>
            With unlimited features that we offer,we promise it possible to make
            everything that was impossible for you !
          </h4>
        </div>
        <div className="left-features">
          <FeaturesInformationCard
            text="RESPONSIVE & MULTIPURPOSE"
            desc="Proin in imagine a ipsum viverra scelerisq enec turp.Nunc"
          />
          <FeaturesInformationCard
            text="RESPONSIVE & MULTIPURPOSE"
            desc="Proin in imagine a ipsum viverra scelerisq enec turp.Nunc"
          />
          <FeaturesInformationCard
            text="RESPONSIVE & MULTIPURPOSE"
            desc="Proin in imagine a ipsum viverra scelerisq enec turp.Nunc"
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
      <div className="second-feature">
        <FeatureDescCard
          text="RESPONSIVE & MULTIPURPOSE"
          title="Desktops,Tablets,Phones"
          desc="Proin in imagine a ipsum viverra scelerisq enec turp.Nunc Proin in imagine a ipsum viverra scelerisq enec turp.Nunc Proin in imagine a ipsum viverra scelerisq enec turp.Nunc"
        />
        <FeatureDescCard
          text="RESPONSIVE & MULTIPURPOSE"
          title="Desktops,Tablets,Phones"
          desc="Proin in imagine a ipsum viverra scelerisq enec turp.Nunc Proin in imagine a ipsum viverra scelerisq enec turp.Nunc Proin in imagine a ipsum viverra scelerisq enec turp.Nunc"
        />
        <FeatureDescCard
          text="RESPONSIVE & MULTIPURPOSE"
          title="Desktops,Tablets,Phones"
          desc="Proin in imagine a ipsum viverra scelerisq enec turp.Nunc Proin in imagine a ipsum viverra scelerisq enec turp.Nunc Proin in imagine a ipsum viverra scelerisq enec turp.Nunc"
        />
        <FeatureDescCard
          text="RESPONSIVE & MULTIPURPOSE"
          title="Desktops,Tablets,Phones"
          desc="Proin in imagine a ipsum viverra scelerisq enec turp.Nunc Proin in imagine a ipsum viverra scelerisq enec turp.Nunc Proin in imagine a ipsum viverra scelerisq enec turp.Nunc"
        />
        <FeatureDescCard
          text="RESPONSIVE & MULTIPURPOSE"
          title="Desktops,Tablets,Phones"
          desc="Proin in imagine a ipsum viverra scelerisq enec turp.Nunc Proin in imagine a ipsum viverra scelerisq enec turp.Nunc Proin in imagine a ipsum viverra scelerisq enec turp.Nunc"
        />
        <FeatureDescCard
          text="RESPONSIVE & MULTIPURPOSE"
          title="Desktops,Tablets,Phones"
          desc="Proin in imagine a ipsum viverra scelerisq enec turp.Nunc Proin in imagine a ipsum viverra scelerisq enec turp.Nunc Proin in imagine a ipsum viverra scelerisq enec turp.Nunc"
        />
      </div>
    </>
  );
};

export default AmazingFeatures;
