import { GET_FACULTY_ALL, GET_FACULTY_INDIVIDUAL, GET_FACULTY_DEPTWISE } from "../actionTypes";
import fetch from "isomorphic-fetch";

//console.log(process.env.FETCH_URL)

export const facultyAll = () => {
  return dispatch => {
    fetch(`${process.env.FETCH_URL}/api/faculty/all`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        dispatch({
          type: GET_FACULTY_ALL,
          data: data,
          isLoading: false
        });
      });
  };
};

export const facultyIndividual = fid => {
  return dispatch => {
    fetch(`${process.env.FETCH_URL}/api/faculty/profile/${encodeURI(fid)}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        dispatch({
          type: GET_FACULTY_INDIVIDUAL,
          data: data,
          isLoading: false
        });
      });
  };
};

export const facultyDepartmentWise = deptid => {
  return dispatch => {
    fetch(`${process.env.FETCH_URL}/api/faculty/${encodeURI(deptid)}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        dispatch({
          type: GET_FACULTY_INDIVIDUAL,
          data: data,
          isLoading: false
        });
      });
  };
};
