import React, { Component } from "react";

import LazyLoad from "react-lazyload";

class FooterAddContact extends Component {
  render() {
    return (
      <div className='ContactInfo'>
        <ul>
          <li>
            <h1>Contact us</h1>
          </li>
          <li>
            <LazyLoad once>
              <img src='/static/images/Jaypee.png' alt='JUET' style={{ maxWidth: "100%", width: "60%" }} />
            </LazyLoad>
          </li>
          <li>07544-267051, 267310-314</li>
          <li>07544-267011</li>
          <li>contact@juet.ac.in</li>
          <li>A.B Road,Raghogarh, Guna (M.P), 473226 ,India</li>
          <li />
        </ul>
      </div>
    );
  }
}

export default FooterAddContact;
