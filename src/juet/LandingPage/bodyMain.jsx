import React, { Component } from "react";
import IntroSection from "./collegeIntroSection";
import AdmissionNotification from "./AdmissionNotification";
// import AnnouncementsCards from './AnnouncementsCards';
import UniversityInfo from "./UniversityInfo";
import PlacementsAlliance from "./PlacementsAndAlliances";
import StudentClubs from "./StudentClubs";
import VisitUniversity from "./VisitUniversity";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { uinfo_Awards, uinfo_AcademicNews, uinfo_Announcements } from "../../redux/actions/MainPage/uinfo";

import "./styles/VideoStyles.css";

const UniversityVideoPage = () => {
  return (
    <div className='VideoContainer'>
      <iframe
        width='100%'
        height='100%'
        src='https://www.youtube.com/embed/_z-5gPgRBC4?autoplay=0&controls=0&showinfo=0&autohide=1'
        frameBorder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </div>
  );
};

class BodyMainLandingPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title = "Jaypee University of Engineering And Technology, Guna";
    this.props.uinfo_AcademicNews();
    this.props.uinfo_Announcements();
    this.props.uinfo_Awards();
  }
  render() {
    return (
      <>
        <IntroSection />
        <AdmissionNotification statusToShow={true} />
        {/* <AnnouncementsCards statusToShow={true} /> */}

        <UniversityInfo
          announcementsData={this.props.uinfoState.Announcements}
          awardsAchievementData={this.props.uinfoState.Awards}
          academicNewsData={this.props.uinfoState.AcademicNews}
        />

        <PlacementsAlliance />
        <StudentClubs />
        <UniversityVideoPage />
        <VisitUniversity />
      </>
    );
  }
}

export default connect(
  state => {
    return {
      uinfoState: state.UInfoStore
    };
  },
  dispatch => {
    return bindActionCreators(
      {
        uinfo_AcademicNews,
        uinfo_Announcements,
        uinfo_Awards
      },
      dispatch
    );
  }
)(BodyMainLandingPage);
