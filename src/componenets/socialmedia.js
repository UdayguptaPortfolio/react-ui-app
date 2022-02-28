import React from 'react'
import '../styles/socialmedia.css';
import { faChrome, faDribbble, faFacebookF, faLinkedin, faHeart, faStumbleupon, faTwitter, faVimeo, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const SocialMedia = () => {
  return (
    <div className='social-media-container'>
        <h1>STARTUPPR</h1>
        <div className='social-media-icons'>
            <a href="#"><FontAwesomeIcon icon={faFacebookF} className='social-media-topicon'/></a>
               <a href="#"><FontAwesomeIcon icon={faLinkedin} className='social-media-topicon'/></a>
               <a href="#"><FontAwesomeIcon icon={faDribbble} className='social-media-topicon'/></a>
               <a href="#"><FontAwesomeIcon icon={faChrome} className='social-media-topicon'/></a>
               <a href="#"><FontAwesomeIcon icon={faStumbleupon} className='social-media-topicon'/></a>
               <a href="#"><FontAwesomeIcon icon={faTwitter} className='social-media-topicon'/></a>
               <a href="#"><FontAwesomeIcon icon={faVimeo} className='social-media-topicon'/></a>
               <a href="#"><FontAwesomeIcon icon={faYoutube} className='social-media-topicon'/></a>
               <a href="#"><FontAwesomeIcon icon={faFacebookF} className='social-media-topicon'/></a>
               <a href="#"><FontAwesomeIcon icon={faChrome} className='social-media-topicon'/></a>
               <a href="#"><FontAwesomeIcon icon={faEnvelope} className='social-media-topicon'/></a>
        </div>
    </div>
  )
}

export default SocialMedia;