import { GET_FACULTY_ALL, GET_FACULTY_INDIVIDUAL, GET_FACULTY_DEPTWISE } from "../actions/actionTypes";

const initialState = {
  fetchedData_OF_FACULTY: []
};

const facultyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FACULTY_ALL:
    case GET_FACULTY_INDIVIDUAL:
    case GET_FACULTY_DEPTWISE:
      return {
        ...state,
        fetchedData_OF_FACULTY: action.data,
        isLoading: action.isLoading
      };

    default:
      return state;
  }
};

export default facultyReducer;
