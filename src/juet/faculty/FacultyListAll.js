import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/faculty.scss";
import { connect } from "react-redux";
import { facultyAll } from "../../redux/actions/FACULTY/fetchFaculty";
import { LoadingView } from "../LoadingView/Loading";
import { bindActionCreators } from "redux";

import LazyLoad from "react-lazyload";

class DisplayFaculty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowModalBox: false
    };
  }
  render() {
    return (
      <section id='faculty'>
        {this.props.record.map(d => {
          return (
            <LazyLoad once>
              <div key={`${d.id}@${d.department.toString().trim()}`}>
                <div className='facultyContainer'>
                  <div className='facultyPhotoContainer'>
                    <LazyLoad once>
                      <img title={d.name} src={"/static/" + d.image.toString()} alt={d.name.toString()} className='facultyImage' />
                    </LazyLoad>
                    <div className='facultyNameTag'>{d.name.toString()}</div>
                    <div className='facultyDesignationTag'>{d.designation}</div>
                  </div>
                  <div className='facultyMainInfoContainer' id={encodeURI(`${d.id}${d.department.toString().trim()}`)}>
                    <div className='facultyUpperInfo'>
                      <ul>
                        <li>
                          Email-id: <span className='UpperInfoData'>{d.email}</span>
                        </li>
                        <li>
                          Contact: <span className='UpperInfoData'>{d.contact}</span>
                        </li>
                      </ul>
                    </div>
                    <div className='facultyLowerInfo'>
                      <p>{`${Buffer.from(d.biography)
                        .toString("utf8")
                        .substr(0, 350)}....`}</p>
                    </div>
                  </div>
                  <div className='facultyBriefButton'>
                    <div className='BriefButton'>
                      <Link to={`/faculty/profile/${d.id}`}>Brief Profile</Link>
                    </div>
                  </div>
                </div>
              </div>
            </LazyLoad>
          );
        })}
      </section>
    );
  }
}

class FacultyListAll extends Component {
  static fetchData({ dispatch }, match) {
    return [dispatch(facultyAll())];
  }
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      liveStatus: true
    };
  }

  componentWillMount() {
    this.props.facultyAll();
  }
  componentDidMount() {
    document.title = "Faculties@JUET,Guna";
  }

  render() {
    if (this.state.liveStatus) {
      return (
        <div>
          {this.props.faculty.isLoading != false ? (
            <LoadingView />
          ) : (
            <div>
              <div className='facultyBackground'>
                <div className='facultyHeadingTag' />
              </div>

              <DisplayFaculty record={this.props.faculty.fetchedData_OF_FACULTY} />
            </div>
          )}
        </div>
      );
    } else {
      return <h2 style={{ textAlign: "center" }}>You are not Authorized to See the Content, Please Contact to WebMaster admin.</h2>;
    }
  }
}

const MapStateToProps = state => {
  return {
    faculty: state.facultyStore
  };
};

const MapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      facultyAll
    },
    dispatch
  );
};
export default connect(
  MapStateToProps,
  MapDispatchToProps
)(FacultyListAll);

/* <div className="facultyLineContainer"><span className="line"></span></div>*/
