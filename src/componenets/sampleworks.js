import React, { useState } from "react";
import { images } from "../imageData/imagedata";
import { allImages } from "../imageData/imagedata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const SampleWorks = () => {
  const [click, setClick] = useState(true);
  const clicked = () => {
    setClick(!click);
    console.log(click);
  };

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    margin-bottom: 10px;
  `;
  const Heading = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const SampleHeading = styled.h2`
    color: rgb(102, 99, 99);
    font-weight: 800;
  `;
  const StrongHeading = styled.strong`
    color: rgb(15, 170, 241);
    font-weight: 800;
  `;

  const SampleDesc = styled.h4`
    color: rgb(102, 99, 99);
  `;

  const PhotoSection = styled.div`
    margin-top: 40px;
    flex: 3;
  `;
  const PhotoContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3px;
    margin: 2px;
    margin-left: auto;
    margin-right: auto;
  `;
  const BgContainer = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: white;
    visibility: hidden;
  `;
  const Photo = styled.div`
    width: 215px;
    height: 215px;
    position: relative;

    &:hover {
      ${BgContainer} {
        visibility: visible;
        background: rgb(15, 170, 241);
        opacity: 0.8;
      }
    }
  `;

  const OnePhoto = styled.img`
    width: 100%;
    height: 100%;
    text-align: center;
  `;
  const Icon = styled.div`
    margin-top: 50px;
  `;

  const ImageHeading = styled.h6`
    margin-bottom: 0;
  `;
  const ImageDesc = styled.p`
    margin-top: 0;
    margin-bottom: 20px;
  `;
  const LongButtonSection = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;

    @media (max-width: 1050px) {
      width: 80%;
    }
  `;

  const LongButton = styled.button`
    background-color: rgb(15, 170, 241);
    border: none;
    height: 20px;
    font-size: 12px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    border-radius: 10px;
    padding-top: 20px;
    padding-bottom: 30px;
    padding-left: 400px;
    padding-right: 400px;

    @media (max-width: 1050px) {
      font-size: auto;
      padding-top: 10px;
      padding-bottom: 60px;
    }
  `;

  return (
    <Container>
      <Heading>
        <SampleHeading>
          SAMPLE{" "}
          <b>
            <StrongHeading>WORKS</StrongHeading>
          </b>
        </SampleHeading>
        <SampleDesc>
          Let's take a look at some of the best of our works here , we love them
          and hope you too
        </SampleDesc>
      </Heading>
      <PhotoSection>
        <PhotoContainer>
          {click
            ? images.map((item) => (
                <Photo>
                  <BgContainer>
                    <Icon>
                      <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </Icon>
                    <ImageHeading>Corporate Brochure</ImageHeading>
                    <ImageDesc>Illustration/Print</ImageDesc>
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="bottomicon"
                    ></FontAwesomeIcon>
                  </BgContainer>
                  <OnePhoto src={`/images/${item.img}`} alt="not available" />
                </Photo>
              ))
            : allImages.map((item) => (
                <Photo>
                  <BgContainer>
                    <Icon>
                      <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </Icon>
                    <ImageHeading>Corporate Brochure</ImageHeading>
                    <ImageDesc>Illustration/Print</ImageDesc>
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="bottomicon"
                    ></FontAwesomeIcon>
                  </BgContainer>
                  <OnePhoto src={`/images/${item.img}`} alt="not available" />
                </Photo>
              ))}
        </PhotoContainer>
      </PhotoSection>
      <LongButtonSection>
        {click ? (
          <LongButton onClick={clicked}>View all works</LongButton>
        ) : (
          <LongButton onClick={clicked}>All works</LongButton>
        )}
      </LongButtonSection>
    </Container>
  );
};
export default SampleWorks;
