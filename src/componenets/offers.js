import React from "react";
import "../styles/offers.css";
import OfferCard from "./offercard";

const Offers = () => {
  return (
    <>
      <div className="offers_container">
        <i className="arrow right"></i>
        <h2>
          {" "}
          WHAT WE{" "}
          <b>
            <strong>OFFER</strong>
          </b>
        </h2>
        <i className="arrow left"></i>
        <h4>
          We offer our customers the best services and solutions, this is our
          main services list
        </h4>
      </div>
      <div className="offer-card">
        <OfferCard
          text="RESPONSIVE & MULTIPURPOSE"
          desc="Proin in imagine a ipsum viverra scelerisq enec turp.Nunc
            "
        />
        <OfferCard
          text="EASY CUSTOMIZATION"
          desc="Proin in imagine a ipsum viverra scelerisq enec turp.Nunc
          "
        />
        <OfferCard
          text="AWESOME FRIENDLY SUPPORT"
          desc="Proin in imagine a ipsum viverra scelerisq enec turp.Nunc
             "
        />
      </div>
    </>
  );
};

export default Offers;
