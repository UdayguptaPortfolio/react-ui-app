import React from "react";
import styled, { keyframes } from "styled-components";

const PriceCard = ({ planName, cost, desc1, desc2, desc3, desc4, desc5 }) => {
  const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1050px) {
      flex-wrap: wrap;
    }
  `;

  const BarKeyframes = keyframes`
  0%{
    width: 0px;
  }
  100%{
    width: 100px;
  }
`;

  const CardButton = styled.button`
    font-size: 15px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    color: #ffffff;
    background-color: black;
    margin-top: -60px;
  `;
  const PriceBar = styled.div`
    width: 100px;
    height: 6px;
    position: absolute;
    margin-top: 490px;
    left: 50%;
    top: 0px;
    transform: translateX(-50%);
    background-color: rgb(15, 170, 241);
    border-radius: 0px 0px 10px 10px;
    display: none;
    animation: ${BarKeyframes} 0.5s;
  `;

  const PriceBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 250px;
    height: 500px;
    padding: 20px 25px;
    box-sizing: border-box;
    margin: 30px;
    position: relative;
    gap: 25px;
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.2);

    &:hover {
      box-shadow: 5px 5px 60px rgba(0, 0, 0, 0.2);
      transition: all ease 0.3s;

      ${PriceBar} {
        display: block;
      }
      ${CardButton} {
        background-color: rgb(15, 170, 241);
      }
    }
  `;

  const PriceSymbol = styled.h4`
    margin-top: -10px;
    letter-spacing: 1px;
    margin-bottom: 8px;
    color: rgb(102, 99, 99);
    font-weight: 1000;
  `;
  const PriceRate = styled.strong`
    font-size: 40px;
    font-weight: 1000;
    font-family: "Garamond Premier Pro Display";
    font-feature-settings: "onum"; /* Activate oldstyle figures */
    src: url("https://use.typekit.net/af/6abdec/00000000000000003b9ade3b/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3")
      format("woff2");
    color: black;
  `;
  const HrLine = styled.hr`
    height: 1px;
    border: 0;
    visibility: visible;
    position: absolute;
    background-color: rgb(34, 33, 33);
    margin-top: 10px;
    margin-bottom: 10px;
  `;
  const PriceDetails = styled.div`
    margin-top: 15px;
    border-top: solid 0.5px rgb(134, 131, 131);
    border-bottom: solid 0.5px rgb(134, 131, 131);
  `;
  const PriceDesc = styled.p`
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    color: rgb(102, 99, 99);
  `;

  const PriceButton = styled.button`
    width: 140px;
    height: 40px;
    margin-top: 20px;
    border-radius: 20px;
    border: none;
    background-color: rgb(15, 170, 241);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    &:hover {
      background-color: rgb(36, 36, 36);
      border: 1px solid rgb(15, 170, 241);
      color: #ffffff;
      transition: all ease 0.3s;
    }
  `;

  return (
    <Container>
      <PriceBox>
        <CardButton>{planName}</CardButton>
        <PriceSymbol>
          $ <PriceRate>{cost}</PriceRate> Monthly
        </PriceSymbol>
        <HrLine />
        <PriceDetails>
          <PriceDesc>{desc1}</PriceDesc>
          <PriceDesc>{desc2}</PriceDesc>
          <PriceDesc>{desc3}</PriceDesc>
          <PriceDesc>{desc4}</PriceDesc>
          <PriceDesc>{desc5}</PriceDesc>
        </PriceDetails>
        <HrLine />
        <PriceButton>SIGN UP NOW</PriceButton>
        <PriceBar />
      </PriceBox>
    </Container>
  );
};

export default PriceCard;
