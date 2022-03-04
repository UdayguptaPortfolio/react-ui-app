import React from "react";
import {
  faChrome,
  faDribbble,
  faFacebookF,
  faLinkedin,
  faHeart,
  faStumbleupon,
  faTwitter,
  faVimeo,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const SocialMedia = () => {
  const Container = styled.div`
    background-color: rgb(41, 40, 40);
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -10px;
    width: 100%;
  `;

  const Heading = styled.h1`
    margin-top: -80px;
    position: absolute;
    color: rgb(129, 129, 129);
  `;
  const SocialMediaIcon = styled.div`
    margin-top: 180px;
    display: flex;
  `;
  const Linking = styled.a`
    background: transparent;
    text-align: center;
    line-height: 33px;
    height: 35px;
    width: 35px;
    margin: 0 4px;
    font-size: 14px;
    border: 1px solid rgb(94, 93, 93);
    color: rgb(15, 170, 241);
    position: relative;
    bottom: 51px;
    border-radius: 5px;

    &:hover {
      color: #fff;
      background-color: rgb(15, 170, 241);
      border-color: rgb(20, 20, 20);
    }
  `;
  const Icons = styled.div`
    transform: rotateZ(-0deg);
    font-size: 17px;
    margin-top: 1px;
    margin-right: 0px;
  `;

  return (
    <Container>
      <Heading>STARTUPPR</Heading>
      <SocialMediaIcon>
        <Linking href="#">
          <Icons>
            <FontAwesomeIcon icon={faFacebookF} />
          </Icons>
        </Linking>
        <Linking href="#">
          <Icons>
            <FontAwesomeIcon icon={faLinkedin} />
          </Icons>
        </Linking>
        <Linking href="#">
          <Icons>
            <FontAwesomeIcon icon={faDribbble} />
          </Icons>
        </Linking>
        <Linking href="#">
          <Icons>
            <FontAwesomeIcon icon={faChrome} />
          </Icons>
        </Linking>
        <Linking href="#">
          <Icons>
            <FontAwesomeIcon icon={faStumbleupon} />
          </Icons>
        </Linking>
        <Linking href="#">
          <Icons>
            <FontAwesomeIcon icon={faTwitter} />
          </Icons>
        </Linking>
        <Linking href="#">
          <Icons>
            <FontAwesomeIcon icon={faVimeo} />
          </Icons>
        </Linking>
        <Linking href="#">
          <Icons>
            <FontAwesomeIcon icon={faYoutube} />
          </Icons>
        </Linking>
        <Linking href="#">
          <Icons>
            <FontAwesomeIcon icon={faFacebookF} />
          </Icons>
        </Linking>
        <Linking href="#">
          <Icons>
            <FontAwesomeIcon icon={faChrome} />
          </Icons>
        </Linking>
        <Linking href="#">
          <Icons>
            <FontAwesomeIcon icon={faEnvelope} />
          </Icons>
        </Linking>
      </SocialMediaIcon>
    </Container>
  );
};

export default SocialMedia;
