import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import '../styles/footer.css'
const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='keyiconbg-footer'>
            <FontAwesomeIcon icon={faArrowAltCircleUp} className='keyicon-footer'/>
        </div>
        <h5>CopyRight @ 2014 Unique, All Right Reserved.</h5>
        </div>
  )
}

export default Footer;