import React, { Component } from "react";
import IntroSection from "./collegeIntroSection";
import AdmissionNotification from "./AdmissionNotification";
// import AnnouncementsCards from './AnnouncementsCards';
import UniversityInfo from "./UniversityInfo";
import PlacementsAlliance from "./PlacementsAndAlliances";
import StudentClubs from "./StudentClubs";
import VisitUniversity from "./VisitUniversity";
class BodyMainLandingPage extends Component {
  componentDidMount() {
    document.title = "Jaypee University of Engineering And Technology, Guna";
  }
  render() {
    return (
      <>
        <IntroSection />
        <AdmissionNotification statusToShow={true} />
        {/* <AnnouncementsCards statusToShow={true} /> */}
        <UniversityInfo announcementsData={null} awardsAchievementData={null} academicNewsData={null} />
        <PlacementsAlliance />
        <StudentClubs />
        <VisitUniversity />
      </>
    );
  }
}

export default BodyMainLandingPage;
