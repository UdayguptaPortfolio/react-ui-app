import React from "react";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FeatureDescCard from "./featuredesccard";
import FeaturesInformationCard from "./featuresinformationcard";
import styled from "styled-components";
const AmazingFeatures = () => {
  const Container = styled.div`
    background-color: rgb(41, 40, 40);
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -10px;
    width: 100%;

    @media (max-width: 1050px) {
      flex-wrap: wrap;
    }
  `;
  const FeatureHeading = styled.div`
    margin-top: -440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const KeyIconBg = styled.div`
    background-color: rgb(15, 170, 241);
    width: 30px;
    height: 30px;
    transform: rotateZ(45deg);
    position: relative;
    bottom: 51px;
    border-radius: 3px;
  `;
  const Heading = styled.h2`
    color: white;
    align-items: center;
    justify-content: center;
  `;
  const StrongHeading = styled.strong`
    color: rgb(15, 170, 241);
    align-items: center;
    justify-content: center;
  `;
  const Desciption = styled.h4`
    color: rgb(102, 99, 99);
    align-items: center;
    justify-content: center;
  `;
  const HeaderIcon = styled.div`
    color: white;
    margin-top: 7px;
    margin-left: 9px;
    font-size: 15px;
  `;

  const LeftFeatures = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-top: 10px;
    left: 370px;

    @media (max-width: 1050px) {
      display: flex;
      flex-direction: column;
      position: absolute;
      margin-top: 10px;
      left: auto;
    }
  `;
  const RightFeatures = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-top: 180px;
    left: 1070px;

    @media (max-width: 1050px) {
      display: none;
    }
  `;
  const Image1 = styled.img`
    position: relative;
    margin-left: -100px;
    border-radius: 15px;
  `;

  const Image2 = styled.img`
    position: relative;
    margin-left: -350px;
    margin-top: -300px;
    border-radius: 15px;
  `;

  return (
    <>
      <Container>
        <FeatureHeading>
          <KeyIconBg>
            <HeaderIcon>
              <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
            </HeaderIcon>
          </KeyIconBg>
          <Heading>
            {" "}
            AMAZING{" "}
            <b>
              <StrongHeading>FEATURES</StrongHeading>
            </b>
          </Heading>
          <Desciption>
            With unlimited features that we offer,we promise it possible to make
            everything that was impossible for you !
          </Desciption>
        </FeatureHeading>

        <LeftFeatures>
          <FeaturesInformationCard
            text="RESPONSIVE & MULTIPURPOSE"
            desc="Proin in imagine a ipsum viverra scelerisq enec turp.Nunc"
            icon={faDesktop}
          />
          <FeaturesInformationCard
            text="RESPONSIVE & MULTIPURPOSE"
            desc="Proin in imagine a ipsum viverra scelerisq enec turp.Nunc"
            icon={faPuzzlePiece}
          />
          <FeaturesInformationCard
            text="RESPONSIVE & MULTIPURPOSE"
            desc="Proin in imagine a ipsum viverra scelerisq enec turp.Nunc"
            icon={faStar}
          />
        </LeftFeatures>
        <RightFeatures>
          <Image1
            className="image1"
            src="feature1.jpg"
            width="350px"
            height="420px"
            alt="1"
          />
          <Image2
            className="image2"
            src="feature2.jpg"
            width="410px"
            height="300px"
            alt="2"
          />
        </RightFeatures>
      </Container>
      <FeatureDescCard />
    </>
  );
};

export default AmazingFeatures;
