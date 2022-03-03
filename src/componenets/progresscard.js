import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
const {CircularProgress} =require('@material-ui/core');

const ProgressCard = ({score,title}) => {
    const[level,setLevel]=useState(0);
    useEffect(()=>{
        setLevel(score)
    })

  const OuterConatiner=styled.div`
  padding: 30px;
  `

  const InnerContainer=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  `
  const Number=styled.div`
  font-weight: 6000px;
  color: white;
  font-size: 30PX;
  align-items: center;
  margin-right: -100px;
  `

  const ProgressBarTitle=styled.h6`
  margin-top: 20px;
  margin-left: -20px;
  font-size: 15px;
  color: rgb(102, 99, 99);
  `
     
  return (
    <OuterConatiner>
    <InnerContainer>
        <Number>
                {score}%
            </Number>
    <CircularProgress size="150px" variant='determinate'  color='primary' value={level}/>
    
    </InnerContainer>
    <ProgressBarTitle>
        {title}
    </ProgressBarTitle>
    </OuterConatiner>
  )
}

export default ProgressCard;