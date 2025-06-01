import { act } from "react";
import {
  EMPLOYEE_ACTION_TYPES,
  type EmployeeState,
  type EmployeeAction,
} from "./employee.types";

const initialState: EmployeeState = { employees: [] };

function employeeReducer(
  state: EmployeeState = initialState,
  action: EmployeeAction
): EmployeeState {
  switch (action.type) {
    case EMPLOYEE_ACTION_TYPES.DELETE:
      const newstate = { ...state }; //state is not directly used
      newstate.employees = newstate.employees.filter(
        (emp) => emp.employeeId !== action.payload
      );
      return newstate;
    // const employees={...state.employees}
    // const result=employees.filter((emp)=>emp.employeeId!==action.payload)
    // return {employees:result}

    case EMPLOYEE_ACTION_TYPES.UPDATE:
      return {
        ...state,
        employees: state.employees.map((emp) =>
          emp.employeeId === action.payload.employeeId ? action.payload : emp
        ),
      };

    case EMPLOYEE_ACTION_TYPES.ADD:
      console.log(action.payload);
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };

    //   const newdata = { ...state };
    //   newdata.employees.push(action.payload);
    //  console.log("created:",newdata.employees)
    //   return newdata;

    default:
      return state;
  }
}

export default employeeReducer;
