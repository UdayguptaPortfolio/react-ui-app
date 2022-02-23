import React from 'react'
import '../styles/upperheader.css';

const UpperHeader = () => {
  return (
    <div className='upperheader_container'>
    <img className='header_image' src='header_image2.jpg' alt='upper header '/>
    <p>WHAT ARE YOU WAITING FOR?</p>
    <h1>LET'S BE CREATIVE !</h1>
    <h2><strong>U</strong>nique,NEXT GENERATION AND HIGHLY FLEXIBLE THEME</h2>
    <br/>
    <i className="arrow right"></i><h3><b><strong>START</strong></b> DOING THAT</h3><i class="arrow left"></i>
    <br/><br/>
    <i className="fa fa-chevron-circle-down" 
    style={{
        fontSize:'48px',
        color:'rgb(15, 170, 241)',
        position: 'absolute',
        top: '377px',
    left: '420px'
        }}></i>

    </div>
  )
}

export default UpperHeader;