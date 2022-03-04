import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const CompanyFacts = () => {
  const Container = styled.div`
    background-color: rgb(41, 40, 40);
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    width: 100%;
  `;
  const HeadingSection = styled.div`
    margin-top: -100px;
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
  const KeyIcon = styled.div`
    color: white;
    transform: rotateZ(-45deg);
    margin-top: 3px;
    margin-left: 9px;
    font-size: 15px;
  `;

  const CompanyHeading = styled.h2`
    color: white;
    align-items: center;
    justify-content: center;
  `;

  const StrongHeading = styled.strong`
    color: rgb(15, 170, 241);
    align-items: center;
    justify-content: center;
  `;

  const DescCompany = styled.h4`
    color: rgb(102, 99, 99);
    align-items: center;
    justify-content: center;
  `;

  const CompanyCenter = styled.div`
    margin-top: 50px;
  `;
  const BatchNumbers = styled.div`
    display: flex;
    padding-left: 30px;
    gap: 120px;

    @media (max-width: 1050px) {
      padding-left: 70px;
      gap: 100px;
    }
  `;

  const Numbers = styled.h1`
    font-size: 100px;
    font-weight: 500;
    font-family: "Garamond Premier Pro Display";
    font-feature-settings: "onum"; /* Activate oldstyle figures */
    src: url("https://use.typekit.net/af/6abdec/00000000000000003b9ade3b/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3")
      format("woff2");
    color: #ddd;

    &:hover {
      color: rgb(15, 170, 241);
    }

    @media (max-width: 1050px) {
      font-size: 50px;
    }
  `;

  const BatchIcons = styled.div`
    margin-top: 10px;
    display: flex;
    gap: 240px;
    margin-left: 90px;
    color: rgb(15, 170, 241);

    @media (max-width: 1050px) {
      margin-top: 5px;
      gap: 150px;
      margin-left: 100px;
    }
  `;

  const BatchTitleSection = styled.div`
    margin-top: 25px;
    display: flex;
    align-items: center;
    position: absolute;
    gap: 125px;
    margin-left: 40px;
    color: rgb(102, 99, 99);
  `;

  const BatchHeading = styled.h6`
    font-size: 12px;
    &:hover {
      color: #ddd;
    }
    @media (max-width: 1050px) {
      margin-left: 40px;
      width: 30px;
    }
  `;
  const CompanyBottomSection = styled.div`
    background-color: rgb(15, 170, 241);
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `;

  const BottomHeading = styled.h4`
    font-size: 15px;
    color: #ddd;
  `;

  const BottomButtonsSection = styled.div`
    align-items: center;
    justify-content: center;
  `;

  const BottomButton = styled.button`
    width: 145px;
    height: 35px;
    border-radius: 5px;
    margin-left: 1rem;
    border: none;
    font-size: 12px;
    font-weight: 1000;
    background-color: #ddd;
    color: rgb(36, 36, 36);

    @media (max-width: 1050px) {
      width: auto;
      height: auto;
    }
  `;

  return (
    <>
      <Container>
        <HeadingSection>
          <KeyIconBg>
            <KeyIcon>
              {" "}
              <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
            </KeyIcon>
          </KeyIconBg>
          <CompanyHeading>
            {" "}
            COMPANY{" "}
            <b>
              <StrongHeading>FACTS</StrongHeading>
            </b>
          </CompanyHeading>
          <DescCompany>
            We do love to work and increase our courier numbers, this is what
            we've done till now
          </DescCompany>
        </HeadingSection>
        <CompanyCenter>
          <BatchNumbers>
            <Numbers>218</Numbers>
            <Numbers>360</Numbers>
            <Numbers>175</Numbers>
            <Numbers>167</Numbers>
          </BatchNumbers>
          <BatchIcons>
            <FontAwesomeIcon icon={faCheckSquare} />
            <FontAwesomeIcon icon={faFileUpload} />
            <FontAwesomeIcon icon={faTicket} />
            <FontAwesomeIcon icon={faThumbsUp} />
          </BatchIcons>
          <BatchTitleSection>
            <BatchHeading>COMPLETED PROJECT</BatchHeading>
            <BatchHeading style={{ marginLeft: "-10px" }}>
              HOUSE OF WORKS/<i>MONTH</i>
            </BatchHeading>
            <BatchHeading style={{ marginLeft: "-10px" }}>
              SOLVED TICKETS
            </BatchHeading>
            <BatchHeading style={{ marginLeft: "30px" }}>
              SATISFIED CLIENTS
            </BatchHeading>
          </BatchTitleSection>
        </CompanyCenter>
      </Container>
      <CompanyBottomSection>
        <BottomHeading>
          ARE YOU SATISFIED WITH UNLIMITED FEATURES THAT WE OFFER?
        </BottomHeading>
        <BottomButtonsSection>
          <BottomButton>PURCHASE IT NOW</BottomButton>
          <BottomButton>CONTACT US NOW</BottomButton>
        </BottomButtonsSection>
      </CompanyBottomSection>
    </>
  );
};

export default CompanyFacts;
