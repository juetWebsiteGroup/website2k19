import { GET_ACADEMIC_NEWS, GET_ANNOUNCEMENTS, GET_AWARDS } from "../actionTypes";

import "isomorphic-fetch";

export const uinfo_Awards = () => {
  return dispatch => {
    fetch(`${process.env.FETCH_URL}/api/uinfo/awards`)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: GET_AWARDS,
          payload: data
        });
      });
  };
};

export const uinfo_Announcements = () => {
  return dispatch => {
    fetch(`${process.env.FETCH_URL}/api/uinfo/announcements`)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: GET_ANNOUNCEMENTS,
          payload: data
        });
      });
  };
};

export const uinfo_AcademicNews = () => {
  return dispatch => {
    fetch(`${process.env.FETCH_URL}/api/uinfo/academicnews`)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: GET_ACADEMIC_NEWS,
          payload: data
        });
      });
  };
};
