import { GET_ACADEMIC_NEWS, GET_ANNOUNCEMENTS, GET_AWARDS } from "../actions/actionTypes";

const IntialState = {};

const uinfoReducer = (state = IntialState, action) => {
  switch (action.type) {
    case GET_ACADEMIC_NEWS:
      return {
        ...state,
        AcademicNews: action.payload
      };

    case GET_ANNOUNCEMENTS:
      return {
        ...state,
        Announcements: action.payload
      };

    case GET_AWARDS:
      return {
        ...state,
        Awards: action.payload
      };
    default:
      return state;
  }
};

export default uinfoReducer;
