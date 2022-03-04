import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faSquareCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";
import TeamMemberCard from "./teammembercard";
import { teamdata } from "../teamData/teamdata";

import "../styles/teammembers.css";

const TeamMembers = () => {
  const [currentState, setCurrentState] = useState(0);
  const [currentTeamData, setCurrentTeamData] = useState(currentState);

  useEffect(() => {
    setCurrentTeamData(teamdata[currentState]);
  }, [currentState]);

  const rightClick = () => {
    if (currentState === teamdata.length - 1) {
      setCurrentState(0);
    } else {
      setCurrentState(currentState + 1);
    }
  };

  const leftClick = () => {
    if (currentState === 0) {
      setCurrentState(teamdata.length - 1);
    } else {
      setCurrentState(currentState - 1);
    }
  };

  return (
    <>
      <div className="team-members-container">
        <div className="members-heading">
          <div className="member-header-icons">
            <FontAwesomeIcon
              icon={faSquareCaretLeft}
              className="header-icon1"
            />
            <FontAwesomeIcon
              icon={faSquareCaretRight}
              className="header-icon2"
            />
          </div>
          <h2>
            {" "}
            TEAM{" "}
            <b>
              <strong>MEMBERS</strong>
            </b>
          </h2>
          <h4>
            We're some creative people with knowledge & awesome skills behind
            the scene bringing you the bests.
          </h4>
        </div>
        <div className="team-center">
          <div className=".body">
            <div class="teamcontain">
              <input type="radio" name="dot" id="one" />
              <input type="radio" name="dot" id="two" />
              <div class="main-card">
                <div class="cards">
                  <TeamMemberCard
                    name="ALEXIS SIMPSON"
                    post="WEB DEVELOPER"
                    email="abc@gmail.com"
                    phone="123456789"
                    img="./images/member1.jpg"
                  />
                  <TeamMemberCard
                    name="ALEXIS SIMPSON"
                    post="WEB DEVELOPER"
                    email="abc@gmail.com"
                    phone="123456789"
                    img="./images/member2.jpg"
                  />
                  <TeamMemberCard
                    name="ALEXIS SIMPSON"
                    post="WEB DEVELOPER"
                    email="abc@gmail.com"
                    phone="123456789"
                    img="./images/member3.jpg"
                  />
                  <TeamMemberCard
                    name="ALEXIS SIMPSON"
                    post="WEB DEVELOPER"
                    email="abc@gmail.com"
                    phone="123456789"
                    img="./images/member4.jpg"
                  />
                </div>

                <div class="cards">
                  <TeamMemberCard
                    name="ALEXIS SIMPSON"
                    post="WEB DEVELOPER"
                    email="abc@gmail.com"
                    phone="123456789"
                    img="./images/member2.jpg"
                  />
                  <TeamMemberCard
                    name="ALEXIS SIMPSON"
                    post="WEB DEVELOPER"
                    email="abc@gmail.com"
                    phone="123456789"
                    img="./images/member3.jpg"
                  />
                  <TeamMemberCard
                    name="ALEXIS SIMPSON"
                    post="WEB DEVELOPER"
                    email="abc@gmail.com"
                    phone="123456789"
                    img="./images/member1.jpg"
                  />
                  <TeamMemberCard
                    name="ALEXIS SIMPSON"
                    post="WEB DEVELOPER"
                    email="abc@gmail.com"
                    phone="123456789"
                    img="./images/member4.jpg"
                  />
                </div>
              </div>
              <div class="button">
                <label for="one" class=" active one"></label>
                <label for="two" class="two"></label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-members-bottom">
        <div className="members-heading-bottom">
          <div className="keyiconbg-bottom">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="keyicon-bottom"
            ></FontAwesomeIcon>
          </div>
          <button>
            <b>{currentTeamData?.name} -</b>
            <i>{currentTeamData?.desig}</i>
          </button>
          <p>"{currentTeamData?.quote}"</p>
          <div className="fontawesone-icons">
            <FontAwesomeIcon
              icon={faSquareCaretLeft}
              className="cart-icon"
              onClick={leftClick}
            />
            <FontAwesomeIcon
              icon={faSquareCaretRight}
              className="cart-icon"
              onClick={rightClick}
            />
          </div>
        </div>
      </div>
      <div className="branding-slider">Hello</div>
    </>
  );
};

export default TeamMembers;
