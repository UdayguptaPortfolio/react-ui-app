import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import ProgressCard from "./progresscard";
import styled from "styled-components";

const PowerFullSkills = () => {
  const Container = styled.div`
    background-color: rgb(41, 40, 40);
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    width: 100%;

    @media screen and (max-width: 1000px) {
      display: none;
    }
  `;
  const Heading = styled.div`
    margin-top: -340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const KeyIconBgSkills = styled.div`
    background-color: rgb(15, 170, 241);
    width: 30px;
    height: 30px;
    transform: rotateZ(45deg);
    position: relative;
    bottom: 51px;
    border-radius: 3px;
  `;
  const KeyIconSkills = styled.div`
    color: white;
    transform: rotateZ(-45deg);
    margin-top: 4px;
    margin-left: 9px;
    font-size: 15px;
  `;
  const HeadingSkills = styled.h2`
    color: white;
    align-items: center;
    justify-content: center;
  `;
  const StrongHeading = styled.strong`
    color: rgb(15, 170, 241);
    align-items: center;
    justify-content: center;
  `;
  const DescSkills = styled.h4`
    color: rgb(102, 99, 99);
    align-items: center;
    justify-content: center;
  `;

  const CenterSkills = styled.div`
    margin-top: 80px;
    display: flex;
    flex-grow: 1;
    gap: 50px;
    position: absolute;
    left: 120px;

    @media screen and (max-width: 1000px) {
      display: none;
    }
  `;

  return (
    <>
      <Container>
        <Heading>
          <KeyIconBgSkills>
            <KeyIconSkills>
              {" "}
              <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
            </KeyIconSkills>
          </KeyIconBgSkills>
          <HeadingSkills>
            {" "}
            OUR{" "}
            <b>
              <StrongHeading>POWERFULL SKILLS</StrongHeading>
            </b>
          </HeadingSkills>
          <DescSkills>
            We are good and experienced at different things and areas where we
            promise about quality of our works!
          </DescSkills>
        </Heading>
        <CenterSkills>
          <ProgressCard score={75} title="WEB DESIGN" />
          <ProgressCard title="WEB DEVELOPMENT" score={92} />
          <ProgressCard score={68} title="SPEED OPTIMIZATION" />
          <ProgressCard title="CUSTOMER SUPPORT" score={100} />
          <ProgressCard score={83} title="MARKETING" />
          <ProgressCard title="ADVERTISEMENT" score={50} />
        </CenterSkills>
      </Container>
    </>
  );
};

export default PowerFullSkills;
