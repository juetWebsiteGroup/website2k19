import React from "react";
import "./styles/studentClub.css";

const ClubCardView = props => {
  return (
    <div className='club_Card' onClick={props.showClubView}>
      <div className='club_container'>
        <div
          className='club_photo'
          style={{
            background: `url(${props.clubPhotoURL}) no-repeat`,
            backgroundSize: "cover",
            backgroundOrigin: "padding-box",
            backgroundPosition: "center"
          }}
        />
      </div>
      <div className='club_name'>{props.clubName}</div>
    </div>
  );
};

const ClubMainView = props => {
  return (
    <div className='clubMainView'>
      <div className='clubDetails'>
        <a href={props.displayClub.clubPageLink}>Visit Website</a>
      </div>
      <img src={props.displayClub.clubPic} alt={props.displayClub.clubName} />
    </div>
  );
};

export default class StudentClubs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { clubData: [] };
    this.showClubView = this.showClubView.bind(this);
  }
  componentWillMount() {
    this.setState({
      clubData: [
        { id: 1, clubName: "jyc", clubInfo: "jdjdjkadaodio", clubPic: "/static/images/jyc1.jpg", clubPageLink: "https://jyc.org" },
        {
          id: 2,
          clubName: "mozilla",
          clubInfo: "jfasfsafaodio",
          clubPic: "/static/images/mozClub1.jpg",
          clubPageLink: "https://mpcjuet.tech"
        },
        { id: 2, clubName: "csi", clubInfo: "ewqqweaodio", clubPic: "/static/images/csi1.jpg", clubPageLink: "https://csi.org" }
      ]
    });
  }
  showClubView = whichClubObj => {
    this.setState({ clubView: whichClubObj });
  };
  render() {
    return (
      <section className='StudentClubs'>
        <div className='StudentClubs__mainView'>
          {this.state.clubView != undefined ? (
            <ClubMainView displayClub={this.state.clubView} />
          ) : (
            <ClubMainView displayClub={this.state.clubData[1]} />
          )}
        </div>
        <div className='StudentClubs__container'>
          <header>
            <h1>Student Activities Club</h1>
            <div className='line' />
          </header>
          {this.state.clubData.map(clubDataObj => {
            return (
              <ClubCardView
                clubName={clubDataObj.clubName}
                clubPhotoURL={clubDataObj.clubPic}
                showClubView={() => this.showClubView(clubDataObj)}
              />
            );
          })}
        </div>
      </section>
    );
  }
}
