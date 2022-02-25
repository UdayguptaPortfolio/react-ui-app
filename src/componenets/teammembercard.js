import React from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import '../styles/teammembercard.css';
const TeamMemberCard = ({name,post,email,phone,img}) => {
  return (
    <div class="card">
           <div class="content">
             <div class="img">

             <div className='team-bgcontainer'>
                    <div class="team-media-icons">
               <a href="#"><FontAwesomeIcon icon={faHeart} className='team-topicon'/></a>
               <a href="#"><FontAwesomeIcon icon={faEnvelope} className='team-topicon'/></a>
               <a href="#"><FontAwesomeIcon icon={faEnvelope} className='team-topicon'/></a>
               <a href="#"><FontAwesomeIcon icon={faEnvelope} className='team-topicon'/></a>
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