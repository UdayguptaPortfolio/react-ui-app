import React from "react";
import {faDesktop} from '@fortawesome/free-solid-svg-icons';
import {faPuzzlePiece} from '@fortawesome/free-solid-svg-icons';
import {faHandsHelping} from '@fortawesome/free-solid-svg-icons';
import "../styles/offers.css";
import OfferCard from "./offercard";

const Offers = () => {
  return (
    <>
      <div className="offers_container">
        <h2>
          {" "}
          WHAT WE{" "}
          <b>
            <strong>OFFER</strong>
          </b>
        </h2>
        <h4>
          We offer our customers the best services and solutions, this is our
          main services list
        </h4>
      </div>
      <div className="offer-card">
        <OfferCard
        icon={faDesktop}
          text="RESPONSIVE & MULTIPURPOSE"
          desc="Proin in imagine a ipsum viverra scelerisq enec turp.Nunc
            "
        />
        <OfferCard
        icon={faPuzzlePiece}
          text="EASY CUSTOMIZATION"
          desc="Proin in imagine a ipsum viverra scelerisq enec turp.Nunc
          "
        />
        <OfferCard
        icon={faHandsHelping}
          text="AWESOME FRIENDLY SUPPORT"
          desc="Proin in imagine a ipsum viverra scelerisq enec turp.Nunc
             "
        />
      </div>
    </>
  );
};

export default Offers;
