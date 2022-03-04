import React from "react";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import PriceCard from "./pricecard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const PricePlans = () => {
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
  const DescHeading = styled.h4`
    color: rgb(102, 99, 99);
    align-items: center;
    justify-content: center;
  `;
  const PriceCardSection = styled.div`
    display: flex;

    @media (max-width: 1050px) {
      flex-wrap: wrap;
    }
  `;
  const PricePlanFooter = styled.div`
    margin-top: 50px;
  `;
  const Image = styled.img``;
  const FooterContent = styled.div`
    display: flex;
    margin-top: -70px;
    gap: 300px;
    margin-left: 400px;

    @media (max-width: 1050px) {
      gap: 30px;
    }
  `;

  const FooterHeading = styled.h3`
    @media (max-width: 1050px) {
      margin-left: -300px;
    }
  `;

  const FooterButton = styled.button`
    width: 180px;
    height: 40px;
    border-radius: 5px;
    border: none;
    margin-top: -5px;
    padding: 0px 15px;
    background-color: rgb(15, 170, 241);
    color: white;
    font-weight: 800;

    &:hover {
      background-color: rgb(36, 36, 36);
      color: #ffffff;
      transition: all ease 0.3s;
    }
  `;

  return (
    <>
      <Container>
        <Heading>
          {" "}
          REAL CHEAP{" "}
          <b>
            <StrongHeading>PRICES</StrongHeading>
          </b>
        </Heading>
        <DescHeading>
          We offer all our services in real low prices in comparison with
          similar companies.
        </DescHeading>
      </Container>
      <PriceCardSection>
        <PriceCard
          planName="STANDARD PLAN"
          cost="19.99"
          desc1="5 Projects"
          desc2="5 GB Storage"
          desc3="Unlimited Users"
          desc4="10 GB Bandwith"
          desc5="Enhanced Security"
        />
        <PriceCard
          planName="PREMIUM PLAN"
          cost="29.99"
          desc1="10 Projects"
          desc2="15 GB Storage"
          desc3="Unlimited Users"
          desc4="20 GB Bandwith"
          desc5="Enhanced Security"
        />
        <PriceCard
          planName="ADVANCED PLAN"
          cost="49.99"
          desc1="15 Projects"
          desc2="30 GB Storage"
          desc3="Unlimited Users"
          desc4="50 GB Bandwith"
          desc5="Enhanced Security"
        />
        <PriceCard
          planName="ULTIMATE PLAN"
          cost="99.99"
          desc1="Unlimited Projects"
          desc2="Unlimited GB Storage"
          desc3="Unlimited Users"
          desc4="Unlimted Bandwith"
          desc5="Enhanced Security"
        />
      </PriceCardSection>
      <PricePlanFooter>
        <Image src="header_image.jpg" width="100%" height="100px" />
        <FooterContent>
          <FooterHeading>STARTUPPR! We Do ❤️ It And Hope You too</FooterHeading>
          <FooterButton>
            PURCHASE IT NOW <FontAwesomeIcon icon={faShoppingBasket} />
          </FooterButton>
        </FooterContent>
      </PricePlanFooter>
    </>
  );
};

export default PricePlans;
