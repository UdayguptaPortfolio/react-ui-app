import React, { useEffect, useState } from 'react';
import '../styles/progresscard.css'
const {CircularProgress} =require('@material-ui/core');

const ProgressCard = ({score,title}) => {
    const[level,setLevel]=useState(0);
    useEffect(()=>{
        setLevel(score)
    })
     
  return (
    <div className='outer'>
    <div className='inner'>
        <div className='number'>
                {score}%
            </div>
    <CircularProgress size="150px" variant='determinate'  color='primary' value={level} className="progress-bar"/>
    
    </div>
    <div className='progress-bar-title'>
        <h6>{title}</h6>
    </div>
    </div>
  )
}

export default ProgressCard