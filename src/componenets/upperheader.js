import React from "react";
import styled from "styled-components";

const UpperHeader = () => {
  const Container = styled.div`
    margin-top: -23.5px;
    margin-left: -5px;

    @media screen and (max-width: 1000px) {
      display: flex;
      flex-wrap: wrap;
    }
  `;
  const HeaderImage = styled.img`
    height: 600px;
    width: 100%;
    position: relative;
    opacity: 5rem;
  `;
  const FirstTitle = styled.p`
    color: rgb(32, 32, 32);
    position: absolute;
    top: 170px;
    left: 300px;

    @media screen and (max-width: 1000px) {
      left: 10px;
    }
  `;
  const SecondTitle = styled.h1`
    color: rgb(36, 36, 36);
    position: absolute;
    top: 180px;
    left: 110px;
    font-size: 65px;
    font-weight: 1000;

    @media screen and (max-width: 1000px) {
      top: 190px;
      left: 10px;
      font-size: 40px;
    }
  `;
  const ThirdTitle = styled.h2`
    color: rgb(224, 219, 219);
    position: absolute;
    top: 260px;
    left: 100px;
    font-weight: 500;
    border-radius: 5px;
    background-color: rgb(36, 36, 36);
    padding: 5px;

    @media screen and (max-width: 1000px) {
      top: 250px;
      left: 10px;
    }
  `;
  const StrongWord = styled.strong`
    color: rgb(15, 170, 241);
  `;
  const StartHeading = styled.h3`
    color: rgb(36, 36, 36);
    position: absolute;
    top: 350px;
    left: 350px;

    @media screen and (max-width: 1000px) {
      left: 50px;
    }
  `;

  const ArrowRight = styled.i`
    top: 357px;
    left: 327px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    position: absolute;

    color: aqua;
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    position: absolute;

    @media screen and (max-width: 1000px) {
      left: 30px;
    }
  `;

  const ArrowLeft = styled.i`
    top: 357px;
    left: 535px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);

    color: aqua;
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    position: absolute;

    @media screen and (max-width: 1000px) {
      color: aqua;
      left: 233px;
    }
  `;

  return (
    <Container>
      <HeaderImage src="header_image2.jpg" alt="upper header " />
      <FirstTitle>WHAT ARE YOU WAITING FOR?</FirstTitle>
      <SecondTitle>LET'S BE CREATIVE !</SecondTitle>
      <ThirdTitle>
        <StrongWord>U</StrongWord>nique,NEXT GENERATION AND HIGHLY FLEXIBLE
        THEME
      </ThirdTitle>
      <br />
      <ArrowLeft />
      <StartHeading>
        <b>
          <StrongWord>START</StrongWord>
        </b>{" "}
        DOING THAT
      </StartHeading>
      <ArrowRight />
    </Container>
  );
};

export default UpperHeader;
