import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
import { faSquareCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faSquareCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import '../styles/teammembers.css';
const TeamMembers = () => {
  return (
      <>
    <div className="team-members-container">
        <div className="members-heading">
        <div className='member-header-icons'>
              <FontAwesomeIcon icon={faSquareCaretLeft} className="header-icon1"/>
              <FontAwesomeIcon icon={faSquareCaretRight} className="header-icon2"/>
          </div>
          <h2>
            {" "}
            TEAM{" "}
            <b>
              <strong>MEMBERS</strong>
            </b>
          </h2>
          <h4>
            We're some creative people with knowledge & awesome skills behind the scene bringing you the bests.
          </h4>
        </div>
        <div className='team-center'>

        

        <div className='.body'>
          <div class="container">
      <input type="radio" name="dot" id="one"/>
      <input type="radio" name="dot" id="two"/>
      <div class="main-card">
  
        <div class="cards">
          <div class="card">
           <div class="content">
             <div class="img">

             <div className='bgcontainer'>
                    <div class="media-icons">
               <a href="#"><FontAwesomeIcon icon={faHeart}/></a>
               <a href="#"><FontAwesomeIcon icon={faEnvelope}/></a>
               <a href="#"><FontAwesomeIcon icon={faEnvelope}/></a>
               <a href="#"><FontAwesomeIcon icon={faEnvelope}/></a>
             </div>
                   
                  </div>

               <img src="./images/member1.jpg" alt=""/>
               
             </div>
             <div class="details">
               <div class="name"><button>ALEXIS SIMPSON</button></div>
               <div class="job">Web Designer</div>
             </div>
             <hr/>
             <div className='contact-icon'>
               <div className='email-detail'>
             <FontAwesomeIcon icon={faEnvelope} style={{marginTop:'5px',color:'rgb(102, 99, 99)'}}/><b>abc@gmail.com</b><br/></div>
             <div className='phone-detail'>
             <FontAwesomeIcon icon={faPhone} style={{marginTop:'5px',color:'rgb(102, 99, 99)'}}/><b>123456789</b></div>
             </div>
             
           </div>
          </div>
          <div class="card">
           <div class="content">
             <div class="img">

             <div className='bgcontainer'>
                    <div class="media-icons">
               <a href="#"><FontAwesomeIcon icon={faHeart}/></a>
               <a href="#"><i class="fab fa-twitter"></i></a>
               <a href="#"><i class="fab fa-instagram"></i></a>
               <a href="#"><i class="fab fa-youtube"></i></a>
             </div>
                   
                  </div>

               <img src="./images/member2.jpg" alt=""/>
               
             </div>
             <div class="details">
               <div class="name"><button>ALEXIS SIMPSON</button></div>
               <div class="job">Web Designer</div>
             </div>
             <hr/>
             <div className='contact-icon'>
               <div className='email-detail'>
             <FontAwesomeIcon icon={faEnvelope} style={{marginTop:'5px',color:'rgb(102, 99, 99)'}}/><b>abc@gmail.com</b><br/></div>
             <div className='phone-detail'>
             <FontAwesomeIcon icon={faPhone} style={{marginTop:'5px',color:'rgb(102, 99, 99)'}}/><b>123456789</b></div>
             </div>
             
           </div>
          </div>
          <div class="card">
           <div class="content">
             <div class="img">

             <div className='bgcontainer'>
                    <div class="media-icons">
               <a href="#"><FontAwesomeIcon icon={faHeart}/></a>
               <a href="#"><i class="fab fa-twitter"></i></a>
               <a href="#"><i class="fab fa-instagram"></i></a>
               <a href="#"><i class="fab fa-youtube"></i></a>
             </div>
                   
                  </div>

               <img src="./images/member3.jpg" alt=""/>
               
             </div>
             <div class="details">
               <div class="name"><button>ALEXIS SIMPSON</button></div>
               <div class="job">Web Designer</div>
             </div>
             <hr/>
             <div className='contact-icon'>
               <div className='email-detail'>
             <FontAwesomeIcon icon={faEnvelope} style={{marginTop:'5px',color:'rgb(102, 99, 99)'}}/><b>abc@gmail.com</b><br/></div>
             <div className='phone-detail'>
             <FontAwesomeIcon icon={faPhone} style={{marginTop:'5px',color:'rgb(102, 99, 99)'}}/><b>123456789</b></div>
             </div>
             
           </div>
          </div>
          <div class="card">
           <div class="content">
             <div class="img">

             <div className='bgcontainer'>
                    <div class="media-icons">
               <a href="#"><FontAwesomeIcon icon={faHeart}/></a>
               <a href="#"><i class="fab fa-twitter"></i></a>
               <a href="#"><i class="fab fa-instagram"></i></a>
               <a href="#"><i class="fab fa-youtube"></i></a>
             </div>
                   
                  </div>

               <img src="./images/member4.jpg" alt=""/>
               
             </div>
             <div class="details">
               <div class="name"><button>ALEXIS SIMPSON</button></div>
               <div class="job">Web Designer</div>
             </div>
             <hr/>
             <div className='contact-icon'>
               <div className='email-detail'>
             <FontAwesomeIcon icon={faEnvelope} style={{marginTop:'5px',color:'rgb(102, 99, 99)'}}/><b>abc@gmail.com</b><br/></div>
             <div className='phone-detail'>
             <FontAwesomeIcon icon={faPhone} style={{marginTop:'5px',color:'rgb(102, 99, 99)'}}/><b>123456789</b></div>
             </div>
             
           </div>
          </div>
        </div>
  
  
        <div class="cards">
          <div class="card">
           <div class="content">
             <div class="img">

             <div className='bgcontainer'>
                    <div class="media-icons">
               <a href="#"><FontAwesomeIcon icon={faHeart}/></a>
               <a href="#"><i class="fab fa-twitter"></i></a>
               <a href="#"><i class="fab fa-instagram"></i></a>
               <a href="#"><i class="fab fa-youtube"></i></a>
             </div>
                   
                  </div>

               <img src="./images/member3.jpg" alt=""/>
               
             </div>
             <div class="details">
               <div class="name"><button>ALEXIS SIMPSON</button></div>
               <div class="job">Web Designer</div>
             </div>
             <hr/>
             <div className='contact-icon'>
               <div className='email-detail'>
             <FontAwesomeIcon icon={faEnvelope} style={{marginTop:'5px',color:'rgb(102, 99, 99)'}}/><b>abc@gmail.com</b><br/></div>
             <div className='phone-detail'>
             <FontAwesomeIcon icon={faPhone} style={{marginTop:'5px',color:'rgb(102, 99, 99)'}}/><b>123456789</b></div>
             </div>
             
           </div>
          </div>
          <div class="card">
           <div class="content">
             <div class="img">

             <div className='bgcontainer'>
                    <div class="media-icons">
               <a href="#"><FontAwesomeIcon icon={faHeart}/></a>
               <a href="#"><i class="fab fa-twitter"></i></a>
               <a href="#"><i class="fab fa-instagram"></i></a>
               <a href="#"><i class="fab fa-youtube"></i></a>
             </div>
                   
                  </div>

               <img src="./images/member4.jpg" alt=""/>
               
             </div>
             <div class="details">
               <div class="name"><button>ALEXIS SIMPSON</button></div>
               <div class="job">Web Designer</div>
             </div>
             <hr/>
             <div className='contact-icon'>
               <div className='email-detail'>
             <FontAwesomeIcon icon={faEnvelope} style={{marginTop:'5px',color:'rgb(102, 99, 99)'}}/><b>abc@gmail.com</b><br/></div>
             <div className='phone-detail'>
             <FontAwesomeIcon icon={faPhone} style={{marginTop:'5px',color:'rgb(102, 99, 99)'}}/><b>123456789</b></div>
             </div>
             
           </div>
          </div>
          <div class="card">
           <div class="content">
             <div class="img">

             <div className='bgcontainer'>
                    <div class="media-icons">
               <a href="#"><FontAwesomeIcon icon={faHeart}/></a>
               <a href="#"><i class="fab fa-twitter"></i></a>
               <a href="#"><i class="fab fa-instagram"></i></a>
               <a href="#"><i class="fab fa-youtube"></i></a>
             </div>
                   
                  </div>

               <img src="./images/member2.jpg" alt=""/>
               
             </div>
             <div class="details">
               <div class="name"><button>ALEXIS SIMPSON</button></div>
               <div class="job">Web Designer</div>
             </div>
             <hr/>
             <div className='contact-icon'>
               <div className='email-detail'>
             <FontAwesomeIcon icon={faEnvelope} style={{marginTop:'5px',color:'rgb(102, 99, 99)'}}/><b>abc@gmail.com</b><br/></div>
             <div className='phone-detail'>
             <FontAwesomeIcon icon={faPhone} style={{marginTop:'5px',color:'rgb(102, 99, 99)'}}/><b>123456789</b></div>
             </div>
             
           </div>
          </div>
          <div class="card">
           <div class="content">
             <div class="img">

             <div className='bgcontainer'>
                    <div class="media-icons">
               <a href="#"><FontAwesomeIcon icon={faHeart}/></a>
               <a href="#"><i class="fab fa-twitter"></i></a>
               <a href="#"><i class="fab fa-instagram"></i></a>
               <a href="#"><i class="fab fa-youtube"></i></a>
             </div>
                   
                  </div>

               <img src="./images/member1.jpg" alt=""/>
               
             </div>
             <div class="details">
               <div class="name"><button>ALEXIS SIMPSON</button></div>
               <div class="job">Web Designer</div>
             </div>
             <hr/>
             <div className='contact-icon'>
               <div className='email-detail'>
             <FontAwesomeIcon icon={faEnvelope} style={{marginTop:'5px',color:'rgb(102, 99, 99)'}}/><b>abc@gmail.com</b><br/></div>
             <div className='phone-detail'>
             <FontAwesomeIcon icon={faPhone} style={{marginTop:'5px',color:'rgb(102, 99, 99)'}}/><b>123456789</b></div>
             </div>
             
           </div>
          </div>
        </div>
  
  
      </div>
      <div class="button">
        <label for="one" class=" active one"></label>
        <label for="two" class="two"></label>
      </div>
    </div></div>




        </div>
        </div>
        <div className='team-members-bottom'>
        <div className="members-heading-bottom">
        <div className='keyiconbg-bottom'>
              <FontAwesomeIcon icon={faQuoteLeft} className='keyicon-bottom'></FontAwesomeIcon>
              </div>
          <button><b>ALEXIS SIMPSON -</b>
              <i> CEO & DEVELOPER</i>
          </button>
          <p>
          "Lorem ipsum dolor sit amet, laudantium, totam rem. Morbi sagittis,
        sem quis lacinia faucibus, orci ipsum gravida tortor, vel intardum
        micanian ut iucta concauat maana id malactio incumn valutnat auie"
          </p>
          <div className='fontawesone-icons'>
              <FontAwesomeIcon icon={faSquareCaretLeft} className="cart-icon"/>
              <FontAwesomeIcon icon={faSquareCaretRight} className="cart-icon"/>
          </div>
        </div>
        </div>
        <div className='branding-slider'>
          Hello
        </div>
        </>
  )
}

export default TeamMembers;