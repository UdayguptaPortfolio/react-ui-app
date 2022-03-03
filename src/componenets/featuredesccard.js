import React from "react";
import {faDesktop} from '@fortawesome/free-solid-svg-icons';
import {faPuzzlePiece} from '@fortawesome/free-solid-svg-icons';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {faList} from '@fortawesome/free-solid-svg-icons';
import {faLifeRing} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from "styled-components";

const FeatureDescCard = ({ text, title, desc,icon }) => {

  const Container=styled.div`
  margin-top: 40px;
  `
  const Wrapper=styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  `
  const CardContainer=styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  row-gap: 40px;
  margin-top: 50px;
  `
  const IconFeature=styled.div`
  font-size: 25px;
  margin-top: 5px;
  `
  const Card=styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 300px;
  flex: 1;

  &:hover{
    ${IconFeature}{
      color: rgb(15, 170, 241);;
    }
  }
  `
  const CardIcon=styled.div`
  flex: 1;
  `
 
  const CardContent=styled.div`
  flex: 4;
  `
  const CardContentHeading=styled.h4`
  font-size: 15px;
  margin: 0;
  `
  const Span=styled.span`
  font-size: 11px;
  font-weight:600;
  color: rgb(180, 175, 175);
  `
  const CardDesc=styled.p`
  font-size: 14px;
  `

  return (
    <>
      <Container>
        <Wrapper>
          <CardContainer>
          <Card>
                   <CardIcon>
            <IconFeature>       <FontAwesomeIcon icon={faDesktop} ></FontAwesomeIcon> </IconFeature>
                   </CardIcon>
                   <CardContent>
                       <CardContentHeading>RESPONSIVE & MULTIPURPOSE</CardContentHeading>
                       <Span>Desktops,Tablets & Phones</Span>
                       <CardDesc>This is one of the best technology in the market which one can use</CardDesc>
                   </CardContent>
                   </Card>
                   <Card>
                   <CardIcon>
                <IconFeature>   <FontAwesomeIcon icon={faPuzzlePiece} ></FontAwesomeIcon> </IconFeature>
                   </CardIcon>
                   <CardContent>
                       <CardContentHeading>RESPONSIVE & MULTIPURPOSE</CardContentHeading>
                       <Span>Desktops,Tablets & Phones</Span>
                       <CardDesc>This is one of the best technology in the market which one can use</CardDesc>
                   </CardContent>
                   </Card>
                   <Card>
                   <CardIcon>
         <IconFeature>          <FontAwesomeIcon icon={faStar} ></FontAwesomeIcon> </IconFeature>
                   </CardIcon>
                   <CardContent>
                       <CardContentHeading>RESPONSIVE & MULTIPURPOSE</CardContentHeading>
                       <Span>Desktops,Tablets & Phones</Span>
                       <CardDesc>This is one of the best technology in the market which one can use</CardDesc>
                   </CardContent>
                   </Card>
                   <Card>
                   <CardIcon>
                 <IconFeature>  <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon> </IconFeature>
                   </CardIcon>
                   <CardContent>
                       <CardContentHeading>RESPONSIVE & MULTIPURPOSE</CardContentHeading>
                       <Span>Desktops,Tablets & Phones</Span>
                       <CardDesc>This is one of the best technology in the market which one can use</CardDesc>
                   </CardContent>
                   </Card>
                   <Card>
                   <CardIcon>
         <IconFeature>          <FontAwesomeIcon icon={faList} ></FontAwesomeIcon> </IconFeature>
                   </CardIcon>
                   <CardContent>
                       <CardContentHeading>RESPONSIVE & MULTIPURPOSE</CardContentHeading>
                       <Span>Desktops,Tablets & Phones</Span>
                       <CardDesc>This is one of the best technology in the market which one can use</CardDesc>
                   </CardContent>
                   </Card>
                    <Card>
                   <CardIcon>
             <IconFeature>      <FontAwesomeIcon icon={faLifeRing} ></FontAwesomeIcon> </IconFeature>
                   </CardIcon>
                   <CardContent>
                       <CardContentHeading>RESPONSIVE & MULTIPURPOSE</CardContentHeading>
                       <Span>Desktops,Tablets & Phones</Span>
                       <CardDesc>This is one of the best technology in the market which one can use</CardDesc>
                   </CardContent>
                   </Card>
            </CardContainer>
        </Wrapper>
      </Container>
    </>
  );
};

export default FeatureDescCard;
