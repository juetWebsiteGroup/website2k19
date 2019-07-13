import { GET_FACULTY_ALL, GET_FACULTY_INDIVIDUAL } from "../actions/actionTypes";

const initialState = {
  fetchedData_OF_FACULTY: []
};

const facultyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FACULTY_ALL:
      return {
        ...state,
        fetchedData_OF_FACULTY: action.data,
        isLoading: action.isLoading
      };

    case GET_FACULTY_INDIVIDUAL: {
      return {
        ...state,
        fetchedData_OF_FACULTY: action.data,
        isLoading: action.isLoading
      };
    }
    default:
      return state;
  }
};

export default facultyReducer;
