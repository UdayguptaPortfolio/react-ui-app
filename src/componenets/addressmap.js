import React from 'react';
import {GoogleMap,Marker} from '@react-google-maps/api';
import { Wrapper} from "@googlemaps/react-wrapper";

import '../styles/addressmap.css'

const AddressMap = () => {
  return (
    <>
    <div className='google-map'>
    <Wrapper
  apiKey={"AIzaSyDA-Uc8D0Lt2BZz11q2RVHDHwqCv7LFpkg"}>
  <GoogleMap  mapContainerStyle={{width:"100%",height:'60vh'}}
  zoom={5}
  center={{lat:20.5937 , lng:78.9629}}
  >
    <Marker position={{lat:20.5937 , lng:78.9629} } 
    />
  </GoogleMap>
    </Wrapper>
      <div className='contact-form'>
      <div class="container-form">
  <form>
    <input type="text" id="fname" name="firstname" placeholder="Name"style={{height:"40px",width:'260px'}}/><br/>
    <input type="email"  name="email" placeholder="Email Address" style={{height:"40px",width:'260px'}}/><br/>
    <textarea id="subject" name="subject" placeholder="Message" style={{height:"80px",width:'260px'}}></textarea><br/>

    <button type="submit">SUMBIT MESSAGE</button>
  </form>
  </div>
      </div>
      </div>
    </>
  )
}

export default AddressMap;