import React from "react";
import "./styles/infoSection.scss";

const InfoSection = ({ data, title }) => {
  return (
    <div className='Academic'>
      <h3>{title}</h3>
      <div className='line' />
      <ul>
        {data &&
          data.map((obj, i) => {
            if (obj.status) {
              return (
                <li key={i}>
                  {obj.isNew ? (
                    <a style={{ color: "orangered" }} href={obj.link}>
                      {obj.title}
                    </a>
                  ) : (
                    <a href={obj.link}>{obj.title}</a>
                  )}
                </li>
              );
            }
          })}
      </ul>
    </div>
  );
};

export default class UniversityInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className='UniversityInfo'>
        <div className='container'>
          {/*academic News Component */}
          <InfoSection title='Academic News' data={this.props.academicNewsData} />
          <InfoSection title='Announcements' data={this.props.announcementsData} />
          <InfoSection title='Awards &amp; Achievements' data={this.props.awardsAchievementData} />
        </div>
      </section>
    );
  }
}
