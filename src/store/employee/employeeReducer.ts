// import { act } from "react";
// import {
//   EMPLOYEE_ACTION_TYPES,
//   type EmployeeState,
//   type EmployeeAction,
// } from "./employee.types";

// const initialState: EmployeeState = { employees: [] };

// // function employeeReducer(
// //   state: EmployeeState = initialState,
// //   action: EmployeeAction
// // ): EmployeeState {
// //   switch (action.type) {
// //     case EMPLOYEE_ACTION_TYPES.DELETE:
// //       const newstate = { ...state }; //state is not directly used
// //       newstate.employees = newstate.employees.filter(
// //         (emp) => emp.employeeId !== action.payload
// //       );
// //       return newstate;
// //     // const employees={...state.employees}
// //     // const result=employees.filter((emp)=>emp.employeeId!==action.payload)
// //     // return {employees:result}

// //     case EMPLOYEE_ACTION_TYPES.UPDATE:
// //       return {
// //         ...state,
// //         employees: state.employees.map((emp) =>
// //           emp.employeeId === action.payload.employeeId ? action.payload : emp
// //         ),
// //       };

// //     case EMPLOYEE_ACTION_TYPES.ADD:
// //       console.log(action.payload);
// //       return {
// //         ...state,
// //         employees: [...state.employees, action.payload],
// //       };

// //     //   const newdata = { ...state };
// //     //   newdata.employees.push(action.payload);
// //     //  console.log("created:",newdata.employees)
// //     //   return newdata;

// //     default:
// //       return state;
// //   }
// // }

// export default employeeReducer;

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { Employee, EmployeeState } from "./employee.types";

const initialState: EmployeeState = {
  employees: [],
};

export const employeeSlice = createSlice({
  name: "employee",

  initialState,

  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees.push(action.payload);
    },
    // updateEmployee:(state,action:PayloadAction<Employee>)=>{
    //    ...state,
    //    employees:state.employees.map((emp) =>
    //        emp.employeeId === action.payload.employeeId ? action.payload : emp);
    // }
    // deleteEmployee:(state, action: PayloadAction<Employee>)=>{
    //   const newstate = { ...state }; //state is not directly used
    //   newstate.employees = newstate.employees.filter(
    //     (emp) => emp.employeeId !== action.payload
    //   );
    // }
  },
});

export const { addEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
