import type { Department, Employee } from "../../store/employee/employee.types";
import baseApi from "../api";


export const departmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDepartmentList: builder.query<Department[], void>({
      query: () => ({
        url: "/department",
        method: "GET",
      }),
      providesTags: ["DEPARTMENT"],
    }),
  }),
});

export const { useGetDepartmentListQuery } = departmentApi;
