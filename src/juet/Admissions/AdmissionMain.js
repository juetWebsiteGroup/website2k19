import React, { Component } from "react";
import "./styles/Admission.css";

import AdmissionUpperLook from "./AdmissionUpperLook";
import QuickAccess from "./QuickAccess";
import AdmissionInfoLook from "./AdmissionInfoLook";
import { Link } from "react-router-dom";
import { LoadingView } from "../LoadingView/Loading";
import { connect } from "react-redux";
import { admissionProgrammes } from "../../redux/actions/ADMISSION/fetchProgrammes";

const ProgrammesOfferedAdmission = props => {
  return (
    <div>
      <h2 className='SubTitle' id={props.DataObj.id}>
        {props.DataObj.UpperTitle}
      </h2>
      <div className='AdmissionApplication'>
        {props.DataObj.SubCategories.map((data, i) => {
          return (
            <div key={i} className='__card'>
              {data.imagePath ? (
                <div className='__cardImage'>
                  <img src={data.imagePath} alt='__card' />
                </div>
              ) : null}
              <div className='__cardTitle'>{data.quota}</div>
              <div className='__cardDetails'>
                <ul>
                  {data.otherLinks.map((data_links, i) => {
                    return (
                      <li key={i + new Date().toUTCString()}>
                        <a target='_blank' href={data_links.LinkTo}>
                          {data_links.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className='__cardButton'>
                <a href={data.ApplyOnlineLink}>Apply Online</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

class AdmissionHome extends Component {
  static fetchData(store) {
    return store.dispatch(admissionProgrammes());
  }
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.title = "Admissions - Jaypee University of Engineering And Technology, Guna";
    this.props.onFetchProgrammes();
  }
  render() {
    return (
      <div id='Admissions'>
        <AdmissionUpperLook UpperTitle={null} />

        <div className='Admission__MainWindow'>
          <AdmissionInfoLook MainTitle={`Programmes Offered - ${new Date().getFullYear()}`}>
            {this.props.Programmes.AdmissionProgrammes ? (
              <div>
                <ProgrammesOfferedAdmission DataObj={this.props.Programmes.AdmissionProgrammes.BTech} />
                <ProgrammesOfferedAdmission DataObj={this.props.Programmes.AdmissionProgrammes.MTech} />
                {/* <ProgrammesOfferedAdmission DataObj={this.props.Programmes.AdmissionProgrammes.PhD} /> */}
                <ProgrammesOfferedAdmission DataObj={this.props.Programmes.AdmissionProgrammes.BSc} />
              </div>
            ) : (
              <LoadingView />
            )}
          </AdmissionInfoLook>
          <QuickAccess />
        </div>
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    Programmes: state.admissionStore
  };
};

const MapDispatchToProps = dispatch => {
  return {
    onFetchProgrammes: () => dispatch(admissionProgrammes())
  };
};
export default connect(
  MapStateToProps,
  MapDispatchToProps
)(AdmissionHome);
