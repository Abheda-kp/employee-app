import employeeReducer from "./employee/employeeReducer";
import { legacy_createStore as createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

const store = createStore(
  employeeReducer,
  undefined,
  applyMiddleware(logger)
);


export default store