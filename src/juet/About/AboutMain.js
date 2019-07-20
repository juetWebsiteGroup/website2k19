import React from "react";

import { QuickAccess } from "../../containers/QuickAccess/index";
import { QuickAccessItems } from "./QuickAccessItems";
import { InnerPageContainer } from "../../containers/InnerPageContainer/index";

import "./styles/about.scss";

const Aboutus = props => {
  return <div className='AboutusContainer'>{props.children}</div>;
};

export default class AboutMain extends React.PureComponent {
  render() {
    return (
      <section id='About'>
        {/* <AboutUpperLook Title="About University" /> */}

        <InnerPageContainer>
          <Aboutus>
            <h2>About us</h2>
            <div className='line' />
            <p>
              Jaypee University of Engineering &amp; Technology, Guna has been established vide Government of Madhya Pradesh gazette extra
              ordinary No.3 of 2010 dated 29th April 2010 as a private university in the State of MP under the provisions of MP Niji
              Vishwavidyalaya Adhiniyam 2007. The university has been notified by the UGC under section 2(f) of the UGC Act, 1956 and
              Accredited by NAAC with Grade “A” in very first cycle of Accreditation in 2016. This University is sponsored by Jaypee Group..
              It was earlier Jaypee Institute of Engineering and Technology, Guna, established in the year 2003 based on the MOU signed
              between Jaiprakash Sewa Sansthan (a not-for-profit trust) and the Government of Madhya Pradesh with an aim of becoming a
              Center of Excellence in Engineering and Technology in MP.
            </p>

            <p>
              This is one of the four Universities established for imparting Engineering education by the Jaiprakash Sewa Sansthan (JSS), an
              educational initiative which recognizes the role of IT and emerging technologies in improving the quality of life of the
              people of India. JUET's location at Raghogarh, in Guna district, is a well thought out as it serves backward district of MP
              such as Shivpuri, Gwalior, Sheopur, Ashoknagar, Sagar, Rajgarh, Vidisha etc. This region, currently in a rural setting with
              strong agricultural activities is likely to grow as a major industrial hub. JUET is being developed as a major center to
              provide competent, well trained technical manpower to the region.
            </p>

            <p>
              The JUET campus on the national highway linking Agra to Mumbai sprawls over 125 acre as a modern institution of higher
              learning in the field of engineering and technical education. The foundation stone of this institution was laid on 15th March
              2002 by the then chief minister of Madhya Pradesh Shri Digvijay Singh. The academic activities started in the year 2003.
              Presently the university offers programs of three faculties named as Faculty of Engineering, Faculty of Mathematical Sciences
              and Faculty of Sciences. Under the Faculty of Engineering, Programs offered are 4 year (8 semester) B.Tech Programmes, M.Tech.
              Programmes and Doctoral Programmes in Chemical Engineering, Civil Engineering, Computer Science and Engineering, Electronics &
              Communication Engineering and Mechanical Engineering. Under the Faculty of Mathematical Sciences, Programs offered are
              B.Sc.(H), M.Sc. and Ph.D. in Mathematics and under the Faculty of Sciences, Programs offered are B.Sc.(H), M.Sc. and Ph.D. in
              Physics and Chemistry.
            </p>

            <p>
              The University has the modern well laid out and green campus with well equipped state-of-the-art laboratories and library,
              which provides a pleasant and intellectually stimulating ambience for students in eco-friendly environment. Special emphasis
              has been laid on developing an environment highly conducive for
            </p>

            <ul>
              <li>Building of a solid foundation of knowledge</li>
              <li>Confidence building</li>
              <li>Pursuit of excellence and self discipline</li>
              <li>Personality development</li>
              <li>
                Inculcation of creativity through motivation and drive, which helps to produce innovative professionals well equipped for
                the rigors of emerging challenges of professional and social life.
              </li>
            </ul>

            <p>
              The University aims to offer the complete educational spectrum of programs in emerging technologies at the degree levels.
              Research in emerging areas of technology is a major thrust and is leveraged for all academic pursuits.
            </p>
          </Aboutus>
          <QuickAccess linkItems={QuickAccessItems} Title={"Quick Access"} />
        </InnerPageContainer>
      </section>
    );
  }
}
