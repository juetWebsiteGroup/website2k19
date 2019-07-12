import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import facultyReducer from "./reducers/Faculty";
import admissionHandler from "./reducers/Admission";
import uinfoReducer from "./reducers/Uinfo";

const rootReducer = combineReducers({
  facultyStore: facultyReducer,
  admissionStore: admissionHandler,
  UInfoStore: uinfoReducer
});

const configureStore = initialState => createStore(rootReducer, initialState, applyMiddleware(thunk, logger));

export default configureStore;
