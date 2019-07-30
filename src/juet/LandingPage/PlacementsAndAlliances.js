import React from "react";
import logo from "../../../static/images/UOF.png";
import logo2 from "../../../static/images/A4U.jpg";
import logo3 from "../../../static/images/UON.jpg";
import logo4 from "../../../static/images/cbri-logo.jpg";
import { InnerPageContainer } from "../../containers/InnerPageContainer/index";

import Lazyload from "react-lazyload";

import { CompanyLogos } from "./placementsCompany";
import "./styles/placementalliance.scss";

const Alliance = props => {
  return (
    <div className='AlliancesContainer'>
      <div className='Heading'>
        <h1>Academic Alliance</h1>
        <div className='line' />
      </div>
      <ul>
        <li>
          <div className='AllianceItem'>
            <Lazyload once>
              <img src={logo} />
            </Lazyload>
            <a href='/'>MOU Between The University of Florida & JUET, Guna.</a>
          </div>
        </li>
        <li>
          <div className='AllianceItem'>
            <Lazyload once>
              <img src={logo2} />
            </Lazyload>
            <a href='/'>General Memerandum of Understanding Between the Alliance of A universities (A-4U) of Spain & JUET, Guna.</a>
          </div>
        </li>
        <li>
          <div className='AllianceItem'>
            <Lazyload once>
              <img src={logo3} />
            </Lazyload>
            <a href='/'>MOU Between University of Nebraska at OMAHA, USA & JUET, Guna.</a>
          </div>
        </li>
        <li>
          <div className='AllianceItem'>
            <Lazyload once>
              <img src={logo4} />
            </Lazyload>
            <a href='/'>
              MOU Between JUET, Guna and Council of Scientific and Industrial Research (CSIR) through Central Building Research Institute
              (CSIR-CBRI), Roorkee.
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default class PlacementsAlliance extends React.Component {
  render() {
    return (
      <InnerPageContainer>
        <>
          <Alliance />
        </>
        <>
          <div className='placementContainer'>
            <div className='Heading'>
              <h1>Top Recruiters</h1>
              <div className='line' />
            </div>
            <ul>
              {CompanyLogos.map((obj, i) => {
                return (
                  <li key={i} title={obj.company}>
                    <Lazyload once>
                      <img src={obj.logo} src={obj.logo} alt={obj.company} />
                    </Lazyload>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      </InnerPageContainer>
    );
  }
}
