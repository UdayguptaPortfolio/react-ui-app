import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
const Footer = () => {
  const Container = styled.div`
    background-color: rgb(41, 40, 40);
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -10px;
    width: 100%;
  `;
  const KeyIconBg = styled.div`
    margin-top: 20px;
    background-color: rgb(15, 170, 241);
    width: 30px;
    height: 30px;
    transform: rotateZ(45deg);
    position: relative;
    bottom: 51px;
    border-radius: 3px;
  `;
  const KeyIconFooter = styled.div`
    color: white;
    transform: rotateZ(-45deg);
    margin-top: 3px;
    margin-left: 9px;
    font-size: 15px;
  `;

  const CopyRightMessage = styled.h5`
    margin-top: -20px;
    color: white;
  `;

  return (
    <Container>
      <KeyIconBg>
        <KeyIconFooter>
          {" "}
          <FontAwesomeIcon icon={faArrowAltCircleUp} />
        </KeyIconFooter>
      </KeyIconBg>
      <CopyRightMessage>
        CopyRight @ 2014 Unique, All Right Reserved.
      </CopyRightMessage>
    </Container>
  );
};

export default Footer;
