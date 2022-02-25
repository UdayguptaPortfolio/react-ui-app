import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import '../styles/companyfacts.css'
const CompanyFacts = () => {
  return (
    <>
    <div className="company-features-container">
        <div className="company-heading">
        <div className='keyiconbg-company'>
              <FontAwesomeIcon icon={faBriefcase} className='keyicon-company'></FontAwesomeIcon>
              </div>
        <h2>
          {" "}
          COMPANY{" "}
          <b>
            <strong>FACTS</strong>
          </b>
        </h2>
        <h4>
          We do love to work and increase our courier numbers, this is what we've done
          till now
        </h4>
      </div>
      <div className='company-center'>
        <div className='batch-numbers'>
          <h1>218</h1>
          <h1>360</h1>
          <h1>175</h1>
          <h1>167</h1>
        </div>
        <div className='batch-icons'>
         
        <FontAwesomeIcon icon={faCheckSquare}/>
        <FontAwesomeIcon icon={faFileUpload}/>
        <FontAwesomeIcon icon={faTicket}/>
        <FontAwesomeIcon icon={faThumbsUp} />
        </div>
        <div className='batch-title'>
          <h6>COMPLETED PROJECT</h6>
          <h6>HOUSE OF WORKS/<i>MONTH</i></h6>
          <h6>SOLVED TICKETS</h6>
          <h6 style={{marginLeft:'30px'}}>SATISFIED CLIENTS</h6>
        </div>
      </div>
      </div>
      <div className='company-facts-bottom'>
          <h4>ARE YOU SATISFIED WITH UNLIMITED FEATURES THAT WE OFFER?</h4>
          <div className='bottom-button'>
          <button>PURCHASE IT NOW</button>
          <button>CONTACT US NOW</button>
          </div>
        </div>
      </>
  )
}

export default CompanyFacts;