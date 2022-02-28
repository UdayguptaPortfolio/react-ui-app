import React from 'react'
import { faFacebookF, faLinkedin,faTwitter,faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/teammembercard.css';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
const TeamMemberCard = ({name,post,email,phone,img}) => {
  return (
    <div class="card">
           <div class="content">
             <div class="team-img">

             <div className='team-bgcontainer'>
                    <div class="team-media-icons">
               <a href="#"><FontAwesomeIcon icon={faFacebookF} className='team-topicon'/></a>
               <a href="#"><FontAwesomeIcon icon={faLinkedin} className='team-topicon'/></a>
               <a href="#"><FontAwesomeIcon icon={faTwitter} className='team-topicon'/></a>
               <a href="#"><FontAwesomeIcon icon={faYoutube} className='team-topicon'/></a>
             </div>
                   
                  </div>

               <img src={img} alt=""/>
               
             </div>
             <div class="details">
               <div class="name"><button>{name}</button></div>
               <div class="job">{post}</div>
             </div>
             <hr/>
             <div className='contact-icon'>
               <div className='email-detail'>
             <FontAwesomeIcon icon={faEnvelope} style={{marginTop:'5px',color:'rgb(102, 99, 99)'}}/><b>{email}</b><br/></div>
             <div className='phone-detail'>
             <FontAwesomeIcon icon={faPhone} style={{marginTop:'5px',color:'rgb(102, 99, 99)'}}/><b>{phone}</b></div>
             </div>
             
           </div>
          </div>
  )
}

export default TeamMemberCard;