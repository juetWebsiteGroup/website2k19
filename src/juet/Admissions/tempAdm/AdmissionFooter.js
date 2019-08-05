import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faLinkedin, faTwitterSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";

export const AdmissionFooter = props => {
  return (
    <section id='Admission__Footer'>
      <div className='container'>
        <p>Toll Free Helpline No. - 180030701556, Email : admission@juet.ac.in</p>
        <div className='socialLinksFooter'>
          <span title='Facebook'>
            <a href='https://www.facebook.com/JaypeeUniversityGuna/'>
              <FontAwesomeIcon color='#ffffff' style={{ fontSize: "2rem" }} icon={faFacebookSquare} />
            </a>
          </span>
          <span title='YouTube'>
            <a href='https://www.youtube.com/channel/UCGZys7YYR7DAFDg0TcXxY4A'>
              <FontAwesomeIcon color='#ffffff' style={{ fontSize: "2rem" }} icon={faYoutubeSquare} />
            </a>
          </span>
          <span title='Linked-In'>
            <a href=''>
              <FontAwesomeIcon color='#ffffff' style={{ fontSize: "2rem" }} icon={faLinkedin} />
            </a>
          </span>
        </div>
        <p>&copy;copyright 2019 Jaypee University of Engineering and Technology, Guna</p>
        <p className='visitorNo'>Visitor No:- {props.counter && props.counter[0].AdmissionCounter}</p>
      </div>
    </section>
  );
};
