import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import '../styles/powerfullskills.css'
import FeaturesInformationCard from './featuresinformationcard';
import ProgressCard from './progresscard';

const PowerFullSkills = () => {
  return (
      <>
    <div className="powerfull-skills-container">
        <div className="skills-heading">
        <div className='keyiconbg-skills'>
              <FontAwesomeIcon icon={faBriefcase} className='keyicon-skills'></FontAwesomeIcon>
              </div>
          <i className="arrow right"></i>
          <h2>
            {" "}
            OUR{" "}
            <b>
              <strong>POWERFULL SKILLS</strong>
            </b>
          </h2>
          <i className="arrow left"></i>
          <h4>
            We are good and experienced at different things and areas where we promise
            about quality of our works!
          </h4>
        </div>
        <div className="center-skills">
          <ProgressCard
            score={75}
            title='WEB DESIGN'
            />
            <ProgressCard
            title='WEB DEVELOPMENT'
            score={92}
            />
            <ProgressCard
            score={68}
            title='SPEED OPTIMIZATION'
            />
            <ProgressCard
            title='CUSTOMER SUPPORT'
            score={100}
            />
            <ProgressCard
            score={83}
            title='MARKETING'
            />
            <ProgressCard
            title='ADVERTISEMENT'
            score={50}
            />
        </div>
        </div>
        </>
  )
}

export default PowerFullSkills;