import type { Employee } from "../../store/employee/employee.types";
import baseApi from "../api";
import type { updatePayload } from "./types";

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    create: builder.mutation<Employee, Employee>({
      query: (payload) => ({
        url: "/employees",

        method: "POST",

        body: payload,
      }),
    }),
    getEmployeeList: builder.query<Employee[], void>({
      query: () => ({
        url: "/employees",
        method: "GET",
      }),
      providesTags: ["EMPLOYEES"],
    }),
    getEmployeeById: builder.query<Employee,number>({
      query: (id) => ({
        url: `/employees/${id}`,
        method: "GET",
      }),
      providesTags: ["EMPLOYEES"],
    }),
    deleteEmployee:builder.mutation<void,number>({
      query:(id)=>({
        url:`/employees/${id}`,
        method:"delete",
      }),
       invalidatesTags: ["EMPLOYEES"], 
    }),
    putEmployee:builder.mutation<void,updatePayload>({
      query:(payload)=>({
        url:`/employees/${payload.id}`,
        method:"put",
        body:payload.employee
      }),
       invalidatesTags: ["EMPLOYEES"]
    })

  }),
});

export const { useGetEmployeeListQuery, useCreateMutation ,useGetEmployeeByIdQuery,useDeleteEmployeeMutation,usePutEmployeeMutation} = employeeApi;
