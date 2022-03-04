import React from "react";
import {
  faFacebookF,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/teammembercard.css";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
const TeamMemberCard = ({ name, post, email, phone, img }) => {
  const Card = styled.div`
    width: calc(100% / 4 - 10px);
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
    transition: all 0.4s ease;
    margin-left: 40px;
    display: flex;
    align-items: flex-start;
    min-width: 300px;
    flex: 1;

    &:hover {
      transform: translateY(-15px);
    }
  `;

  const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  `;

  const TeamBgContainer = styled.div`
    position: fixed;
    display: flex;
    width: 80%;
    height: 280px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: white;
    visibility: hidden;
  `;

  const TeamImg = styled.div`
    height: 285px;
    width: 250px;
    padding: 3px;
    background: none;
    margin-bottom: 14px;

    &:hover {
      ${TeamBgContainer} {
        visibility: visible;
        background: rgb(15, 170, 241);
        opacity: 0.8;
      }
    }
  `;

  const MediaIcons = styled.div``;
  const Linking = styled.a`
    background: white;
    text-align: center;
    line-height: 33px;
    height: 35px;
    width: 35px;
    margin: 0 4px;
    font-size: 14px;
    transform: rotateZ(45deg);
    color: rgb(15, 170, 241);
    position: relative;
    bottom: 51px;
    border-radius: 3px;

    &:hover {
      color: #fff;
      background-color: rgb(20, 20, 20);
      border-color: rgb(20, 20, 20);
    }
  `;
  const Icons = styled.div`
    transform: rotateZ(-45deg);
    font-size: 17px;
    margin-top: 10px;
    margin-right: 0px;
    margin-top: 50px;
  `;
  const Image = styled.img`
    height: 100%;
    width: 100%;
  `;
  const Details = styled.div``;
  const Name = styled.div``;
  const NameButton = styled.button`
    margin-top: -50px;
    position: relative;
    margin-left: 10px;
    font-size: 20px;
    font-weight: 500;
    border: none;
    padding: 8px;
    color: #fff;
    border-radius: 5px;
    background-color: rgb(15, 170, 241);

    &:hover {
      background-color: rgb(41, 40, 40);
    }
  `;
  const Job = styled.div`
    margin-top: 25px;
    font-size: 15px;
    font-weight: 1000;
    color: rgb(102, 99, 99);
  `;
  const HrLine = styled.hr`
    background-color: black;
  `;
  const ContactIcon = styled.div`
    margin-top: 10px;
    margin-bottom: 30px;
  `;
  const EmailDetail = styled.div`
    display: flex;
    gap: 20px;
  `;
  const IconsPhoneEmail = styled.div``;
  return (
    <div class="card">
      <div class="content">
        <div class="team-img">
          <div className="team-bgcontainer">
            <div class="team-media-icons">
              <a href="#">
                <FontAwesomeIcon icon={faFacebookF} className="team-topicon" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} className="team-topicon" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} className="team-topicon" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faYoutube} className="team-topicon" />
              </a>
            </div>
          </div>

          <img src={img} alt="" />
        </div>
        <div class="details">
          <div class="name">
            <button>{name}</button>
          </div>
          <div class="job">{post}</div>
        </div>
        <hr />
        <div className="contact-icon">
          <div className="email-detail">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ marginTop: "5px", color: "rgb(102, 99, 99)" }}
            />
            <b>{email}</b>
            <br />
          </div>
          <div className="phone-detail">
            <FontAwesomeIcon
              icon={faPhone}
              style={{ marginTop: "5px", color: "rgb(102, 99, 99)" }}
            />
            <b>{phone}</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
