import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';


const FeaturesInformationCard = ({text,desc,icon}) => {

const Conatiner=styled.div`
margin-top: 150px;
width:100%;
display: flex;
justify-content: center;
align-items: center;
`
const Icon=styled.div`
color:rgb(15, 170, 241);
height: 35px;
font-size:30px;
margin-bottom: -40px;
margin-left: -50px;
`
const Box=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 280px;
height: auto;
position: absolute;

&:hover{
  ${Icon}{
    color: white;
  }
}
`
const Bar=styled.div`

`

const Heading=styled.h4`
letter-spacing: 1px;
margin-bottom: 8px;
margin-left: 14px;
color: white;
font-weight: 1000;
`

const Description=styled.p`
margin-left: 14px;
color: rgb(102, 99, 99);
`

  return (
    <Conatiner>
        <Box>
        <Bar>
       <Icon> <FontAwesomeIcon icon={icon}></FontAwesomeIcon></Icon>
        <Heading>{text}</Heading>
          <Description>{desc} 
          </Description>
          </Bar>
        </Box>
    </Conatiner>
  )
}

export default FeaturesInformationCard;