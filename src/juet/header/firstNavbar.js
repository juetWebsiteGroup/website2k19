import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faLinkedin, faTwitterSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";

class FirstNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showStatus: true,
      dataContainer: []
    };
  }

  componentWillMount() {
    this.setState(() => {
      return {
        dataContainer: [
          { id: "NavUL1_1", Link_to: "/Webkiosk", title: "Webkiosk" },
          { id: "NavUL1_2", Link_to: "/VirtualTour", title: "Virtual Tour" },
          { id: "NavUL1_3", Link_to: "/JYC", title: "JUET Youth Club" },
          { id: "NavUL1_4", Link_to: "/Contact", title: "Contact" }
        ]
      };
    });
  }
  get_UpperNavList = () => {
    return (
      <ul className='NavUL'>
        {this.state.dataContainer.map(data => {
          return (
            <li key={data.id}>
              <a href={data.Link_to}>{data.title}</a>
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    if (this.state.showStatus) {
      return (
        <header className='upper_nav'>
          <nav>{this.get_UpperNavList()}</nav>
          <ul className='social_links'>
            <li title='Facebook'>
              <FontAwesomeIcon color='#ffffff' style={{ fontSize: "1.8rem" }} icon={faFacebookSquare} />
            </li>
            <li title='Twitter'>
              <FontAwesomeIcon color='#ffffff' style={{ fontSize: "1.8rem" }} icon={faTwitterSquare} />
            </li>
            <li title='YouTube'>
              <FontAwesomeIcon color='#ffffff' style={{ fontSize: "1.8rem" }} icon={faYoutubeSquare} />
            </li>
            <li title='LinkedIn'>
              <FontAwesomeIcon color='#ffffff' style={{ fontSize: "1.8rem" }} icon={faLinkedin} />
            </li>
          </ul>
        </header>
      );
    }
  }
}

export default FirstNavbar;
