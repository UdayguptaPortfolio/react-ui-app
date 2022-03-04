import React from "react";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { faHandsHelping } from "@fortawesome/free-solid-svg-icons";
import OfferCard from "./offercard";
import styled from "styled-components";

const Offers = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 70px;
    margin-bottom: 20px;

    @media (max-width: 1050px) {
      flex-wrap: wrap;
    }
  `;
  const Heading = styled.h2`
    color: rgb(102, 99, 99);
    align-items: center;
    justify-content: center;
    font-weight: 800;

    @media (max-width: 1050px) {
      height: auto;
      width: auto;
    }
  `;
  const StrongHeading = styled.strong`
    color: rgb(15, 170, 241);
    align-items: center;
    justify-content: center;
    font-weight: 800;
  `;
  const Description = styled.h4`
    color: rgb(102, 99, 99);
    align-items: center;
    justify-content: center;
  `;
  const OfferCardMaterial = styled.div`
    display: flex;

    @media (max-width: 1050px) {
      flex-wrap: wrap;
    }
  `;

  return (
    <>
      <Container>
        <Heading>
          {" "}
          WHAT WE{" "}
          <b>
            <StrongHeading>OFFER</StrongHeading>
          </b>
        </Heading>
        <Description>
          We offer our customers the best services and solutions, this is our
          main services list
        </Description>
      </Container>

      <OfferCardMaterial>
        <OfferCard
          icon={faDesktop}
          text="RESPONSIVE & MULTIPURPOSE"
          desc="Proin in imagine a ipsum viverra scelerisq enec turp.Nunc
            "
        />
        <OfferCard
          icon={faPuzzlePiece}
          text="EASY CUSTOMIZATION"
          desc="Proin in imagine a ipsum viverra scelerisq enec turp.Nunc
          "
        />
        <OfferCard
          icon={faHandsHelping}
          text="AWESOME FRIENDLY SUPPORT"
          desc="Proin in imagine a ipsum viverra scelerisq enec turp.Nunc
             "
        />
      </OfferCardMaterial>
    </>
  );
};

export default Offers;
