import React from "react";

import { InnerPageContainer } from "../../containers/InnerPageContainer/index";
import { QuickAccess } from "../../containers/QuickAccess/index";
import { QuickAccessItems } from "./QuickAccessItems";

import "./styles/about.scss";

const MissionVision = props => {
  return (
    <section id='MissionVision'>
      <InnerPageContainer>
        <div className='missionVisionContainer'>
          <h1>University</h1>
          <div className='line' />
          <div className='subSection'>
            <h2>Mission</h2>
            <p>
              "To make the university a <b>'Center of Excellence'</b> in the field of Engineering and Technology with highly developed
              infrastructure, excellent faculty with an international outlook and active interaction with the industry".
            </p>
          </div>
          <div className='subSection'>
            <h2>Vision</h2>
            <p>
              "Playing a pivotal role to enable the country and state of Madhya Pradesh, in particular, in developing high caliber trained
              manpower in the frontier areas of Technologies".
            </p>
          </div>
        </div>
        <QuickAccess linkItems={QuickAccessItems} Title={"Quick Access"} />
      </InnerPageContainer>
    </section>
  );
};

export default MissionVision;
