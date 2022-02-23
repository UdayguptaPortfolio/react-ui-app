import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import '../styles/companyfacts.css'
const CompanyFacts = () => {
  return (
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
      </div>
  )
}

export default CompanyFacts;