import React from "react";

import { InnerPageContainer } from "../../containers/InnerPageContainer/index";
import { QuickAccess } from "../../containers/QuickAccess/index";
import { QuickAccessItems } from "./QuickAccessItems";

import "./styles/about.scss";

const JPGroup = props => {
  return (
    <section id='JPGroup'>
      <InnerPageContainer>
        <div className='JPGroupContainer'>
          <h1>Jaypee Group</h1>
          <div className='line' />
          <p>
            The Jaypee Group is a well diversified infrastructural industrial conglomerate in India. Over the decades it has maintained its
            salience with leadership in its chosen line of businesses - Engineering and Construction, Cement, Private Hydropower,
            Hospitality, Real Estate Development, Expressways and Highways. The group has been discharging its responsibilties to the
            satisfaction of all its shareholders and fellow Indians, summed by its guiding philosophy of <b>"Growth with a Human Face".</b>
          </p>

          <a className='button' href='http://www.jalindia.com/'>
            Read more
          </a>
        </div>
        <QuickAccess linkItems={QuickAccessItems} Title={"Quick Access"} />
      </InnerPageContainer>
    </section>
  );
};

export default JPGroup;
