import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled,{keyframes} from 'styled-components';

const OfferCard = ({icon,text,desc}) => {

const Container=styled.div`
width:100%;
display: flex;
justify-content: center;
align-items: center;

@media(max-width:1050px){
flex-wrap:wrap;
}
`
const BarKeyframes=keyframes`
  0%{
    width: 0px;
  }
  100%{
    width: 100px;
  }
`

const Bar=styled.div`
width: 100px;
height: 6px;
position: absolute;
left:50%;
top:0px;
transform: translateX(-50%);
background-color:rgb(15, 170, 241);
border-radius: 0px 0px 10px 10px;
display: none;
animation: ${BarKeyframes} 0.5s;

`
const Icon = styled.div`
font-size: 40px;
margin-bottom: 15px;
`;

const Box=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 10px;
width: 400px;
height: 270px;
padding: 20px 25px;
box-sizing: border-box;
margin: 30px;
position: relative;

&:hover{
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.2);
  transition: all ease 0.3s;

  ${Bar}{
    display: block;
  }
  ${Icon}{
    color:rgb(15, 170, 241);
  }
}

`
const BoxHeading=styled.h4`
letter-spacing: 1px;
margin-bottom: 8px;
color: rgb(102, 99, 99);
font-weight: 1000;
`
const BoxParagraph=styled.p`
text-align: center;
`
const BoxButton=styled.button`
width: 140px;
height: 40px;
margin-top: 20px;
border-radius: 20px;
border: 1px solid rgba(74,144,226,0.5);
display: flex;
justify-content: center;
align-items: center;
color: gray;

&:hover{
  background-color: rgb(15, 170, 241);
  border: 1px solid rgb(15, 170, 241);
  color: #FFFFFF;
  transition: all ease 0.3s;
}
`
  return (
    <Container>
        <Box>
          <Bar/>
          <Icon>
          <FontAwesomeIcon icon={icon}></FontAwesomeIcon></Icon>
          <BoxHeading>{text}</BoxHeading>
          <BoxParagraph>{desc} 
          </BoxParagraph>
          <BoxButton>Read More</BoxButton>
        </Box>
      </Container>
  )
}

export default OfferCard;