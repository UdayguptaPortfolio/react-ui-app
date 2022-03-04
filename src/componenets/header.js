import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const Container = styled.div`
    overflow: hidden;
    padding: 20px 10px;
    margin-right: 165px;
  `;
  const Linking = styled.a`
    float: left;
    color: black;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;

    &:hover {
      background-color: rgb(15, 170, 241);
      color: white;
    }

    @media screen and (max-width: 500px) {
      float: none;
      display: block;
      text-align: left;
    }
  `;
  const LogoLinking = styled.a`
    font-size: 25px;
    font-weight: bold;
    margin-left: 300px;

    @media screen and (max-width: 500px) {
      margin-left: auto;
    }
  `;
  const RighHeader = styled.div`
    float: right;

    @media screen and (max-width: 500px) {
      float: none;
    }
  `;
  const ActiveLink = styled.a`
    background-color: rgb(15, 170, 241);
    color: white;
  `;
  const HorizontalLine = styled.hr`
    height: 1px;
    border: 0;
    background-color: lightgray;
    margin-top: 20px;
    margin-bottom: 10px;
  `;

  return (
    <Container>
      <LogoLinking>STARTUPRR</LogoLinking>
      <RighHeader>
        <Linking href="home">Home</Linking>

        <Linking href="">
          <ActiveLink>Portfolio</ActiveLink>
        </Linking>
        <Linking href="">Blog</Linking>
        <Linking href="">Pages</Linking>
        <Linking href="">Features</Linking>
        <Linking href="">Mega-Menu</Linking>
        <Linking href="">Contact</Linking>
        <FontAwesomeIcon
          icon={faSearch}
          style={{ color: "rgb(15, 170, 241)", marginTop: "17px" }}
        />
      </RighHeader>
      <HorizontalLine />
    </Container>
  );
};
