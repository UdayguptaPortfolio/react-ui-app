import React from 'react'
import {faDesktop} from '@fortawesome/free-solid-svg-icons';
import {faPuzzlePiece} from '@fortawesome/free-solid-svg-icons';
import {faHandsHelping} from '@fortawesome/free-solid-svg-icons';
import PriceCard from './pricecard';
import '../styles/priceplans.css';

const PricePlans = () => {
  return (
      <>
    <div className="price_container">
        <h2>
          {" "}
          REAL CHEAP{" "}
          <b>
            <strong>PRICES</strong>
          </b>
        </h2>
        <h4>
          We offer all our services in real low prices in comparison with similar
          companies.
        </h4>
      </div>
      <div className="price-card">
      <PriceCard
        planName='STANDARD PLAN'
        cost='19.99'
        desc1='5 Projects'
        desc2='5 GB Storage'
        desc3='Unlimited Users'
        desc4='10 GB Bandwith'
        desc5='Enhanced Security'
        />
        <PriceCard
        planName='PREMIUM PLAN'
        cost='29.99'
        desc1='10 Projects'
        desc2='15 GB Storage'
        desc3='Unlimited Users'
        desc4='20 GB Bandwith'
        desc5='Enhanced Security'
        />
        <PriceCard
        planName='ADVANCED PLAN'
        cost='49.99'
        desc1='15 Projects'
        desc2='30 GB Storage'
        desc3='Unlimited Users'
        desc4='50 GB Bandwith'
        desc5='Enhanced Security'
        />
        <PriceCard
        planName='ULTIMATE PLAN'
        cost='99.99'
        desc1='Unlimited Projects'
        desc2='Unlimited GB Storage'
        desc3='Unlimited Users'
        desc4='Unlimted Bandwith'
        desc5='Enhanced Security'
        />

      </div>
      </>
  )
}

export default PricePlans;