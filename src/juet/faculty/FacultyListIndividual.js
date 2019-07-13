import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { facultyIndividual } from "../../redux/actions/FACULTY/fetchFaculty";

import "isomorphic-fetch";

const DisplayIndividualFaculty = props => {
  return (
    <div>
      <ul style={{ display: "grid", gridTemplateColumns: "1fr", gridGap: "1em" }}>
        {props.record.map(d => {
          return (
            <li key={d.id}>
              <img
                title={d.name}
                src={"/static/" + d.image.toString()}
                alt={d.name.toString()}
                style={{ width: "30%", maxWidth: "100%" }}
              />
              {d.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

class FacultyIndividualProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FacultyID: props.match.params.id,
      liveStatus: true
    };
  }
  componentDidMount() {
    this.props.facultyIndividual(this.state.FacultyID);
  }
  render() {
    if (this.state.liveStatus) {
      return <DisplayIndividualFaculty record={this.props.facultyData} />;
    } else {
      return <h2>You are not Authorized to See the Content, Please Contact to WebMaster admin.</h2>;
    }
  }
}

export default connect(
  state => {
    return {
      facultyData: state.facultyStore.fetchedData_OF_FACULTY
    };
  },
  dispatch => {
    return bindActionCreators(
      {
        facultyIndividual
      },
      dispatch
    );
  }
)(FacultyIndividualProfile);
