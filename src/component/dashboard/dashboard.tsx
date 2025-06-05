import "./dashoboard.css";
import moment from "moment";
import Select from "../select/select";
import { useNavigate, useParams } from "react-router-dom";
import InputField from "../inputfield/inputfield";
import Button from "../button/button";
import EmployeeData from "../dataset/dataset";
import React, { useEffect, useState } from "react";
import store, { useAppDispatch, useAppSelector } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../../store/employee/employeeReducer";
import {
  useCreateMutation,
  useGetEmployeeListQuery,
  usePutEmployeeMutation,
} from "../../api-service/employees/employees.api";
import { useGetDepartmentListQuery } from "../../api-service/department/department.api";
// import { useCreateMutation } from "../../api-service/employees/employees.api";
// import {
//   EMPLOYEE_ACTION_TYPES,
//   type Status,
// } from "../../store/employee/employee.types";

let createData = {
  employeeID: "",
  email: "",
  name: "",
  age: 0,
  password: "",
  role: "UI",
  dateOfJoining: "",
  department: {
    id: 1,
    departmentName: "",
  },
  experience: 2,
  status: "Active",
  address: {
    houseNo: "",
    line1: "",
    line2: "",
    pincode: "",
  },
};
const Dashboard = () => {
  const { data: employeeData } = useGetEmployeeListQuery();
  // console.log("employeeData:", employeeData);
  const { data: departments } = useGetDepartmentListQuery();
  // console.log("DEPTData:", departments);
  const departmentOptions = departments?.map((d) => d.departmentName) || [];

  const { id } = useParams();
  const [dataValues, setDataValues] = useState(() =>
    id ? employeeData?.find((item) => item.id === Number(id)) : createData
  );

  const navigate = useNavigate();
  // const dispatch = useAppDispatch();

 
  const [create, { isLoading }] = useCreateMutation();
  const [update] = usePutEmployeeMutation();
  const [error, setError] = useState("");

  const data = employeeData?.find((item: any) => item.id === Number(id));

  const handleSubmit = () => {
    // const dateOfJoiningISO = dataValues?.dateOfJoining
    //   ? new Date(dataValues.dateOfJoining).toISOString()
    //   : "";
    if (!id) {
      const payload = {
        ...dataValues,
        departmentId: Number(dataValues?.department.id),
        experience: Number(dataValues?.experience),
      //  dateOfJoining: dateOfJoiningISO,
      };
      create(payload)
        .unwrap()
        .then((response) => {
          console.log("response is:", response);
          navigate("/employees");
        })
        .catch((error) => {
          setError(error.data.message);
          console.log(error);
        });
      // const action =
      // { type: EMPLOYEE_ACTION_TYPES.ADD, payload: dataValues };
      //  dispatch(addEmployee(dataValues));
      // dispatch(action);
    } else {
      // console.log("datavalues", dataValues);
      // //  const action = { type: EMPLOYEE_ACTION_TYPES.UPDATE, payload: dataValues };
      // console.log("Dispatching action with payload:", dataValues);
      // dispatch(action);
      console.log("datavalues:", dataValues);
      const payload = {
        ...dataValues,
        department: Number(dataValues?.department.id),
        experience: Number(dataValues?.experience),
     //   dateOfJoining: dateOfJoiningISO,
      };
      console.log("payload:", payload);
      update(payload)
        .unwrap()
        .then(() => {})
        .catch((error) => {
          setError(error.data.message);
        });
    }
  };

  useEffect(() => {
    console.log("changes:", dataValues);
  }, [dataValues]);

  return (
    <div className="body">
      <div className="subpart">
        <div className="flex-container">
          <div className="form">
            <InputField
              type="text"
              placeholder="Employee name"
              label="Employee Name"
              defaultVal={id ? data?.name : ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDataValues({ ...dataValues, name: e.target.value })
              }
            />
          </div>
          <div className="form">
            <InputField
              type="text"
              placeholder="Age"
              label="Age"
              defaultVal={id ? data?.age : ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDataValues({ ...dataValues, age: Number(e.target.value) })
              }
            />
          </div>
          <div className="form">
            <InputField
              type="text"
              placeholder="email"
              label="Email"
              defaultVal={id ? data?.email : ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDataValues({ ...dataValues, email: e.target.value })
              }
            />
          </div>
          {!id && (
            <div className="form">
              <InputField
                type="password"
                placeholder="password"
                label="Password"
                defaultVal=""
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDataValues({ ...dataValues, password: e.target.value })
                }
              />
            </div>
          )}
          <div className="form">
            <InputField
              type="Date"
              placeholder="Joining Date"
              label="Joining Date"
              defaultVal={
                id && data?.dateOfJoining
                  ? moment(data.dateOfJoining).format("YYYY-MM-DD")
                  : ""
              }
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDataValues({ ...dataValues, dateOfJoining: e.target.value })
              }
            />
          </div>
          <div className="form">
            <Select
              label="Department"
              options={departmentOptions}
              default_val={dataValues?.department.departmentName || ""}
              onChange={(e) => {
                const selectedDeptName = e.target.value;
                const selectedDept = departments?.find(
                  (d) => d.departmentName === selectedDeptName
                );
                if (selectedDept) {
                  setDataValues({ ...dataValues, department: selectedDept });
                }
              }}
            />
          </div>
          <div className="form">
            <Select
              options={["UI", "UX", "DEVELOPER", "HR"]}
              default_val={id ? data?.role : "Choose Role"}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setDataValues({ ...dataValues, role: e.target.value })
              }
              label="Choose Role"
            />
          </div>
          <div className="form">
            <Select
              options={["ACTIVE", "INACTIVE", "PROBATION"]}
              default_val={id ? data?.status : "Status"}
              label="Status"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setDataValues({
                  ...dataValues,
                  status: e.target.value as Status,
                })
              }
            />
          </div>
          <div className="form">
            <Select
              options={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]}
              default_val={id ? data?.experience : "2"}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setDataValues({ ...dataValues, experience: e.target.value })
              }
              label="Experience"
            />
          </div>
        </div>

        <div className="last-block">
          <div className="parent">
            <div className="address-block">
              <InputField
                type="text"
                placeholder="House No/Block"
                label="Address"
                defaultVal={id ? data?.address.houseNo : ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDataValues({
                    ...dataValues,
                    address: {
                      ...dataValues.address,
                      houseNo: e.target.value,
                    },
                  })
                }
              />
              <InputField
                type="text"
                placeholder="Address Line 1"
                defaultVal={id ? data?.address.line1 : ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDataValues({
                    ...dataValues,
                    address: {
                      ...dataValues.address,
                      line1: e.target.value,
                    },
                  })
                }
              />
              <InputField
                type="text"
                placeholder="Address Line 2"
                defaultVal={id ? data?.address.line2 : ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDataValues({
                    ...dataValues,
                    address: {
                      ...dataValues.address,
                      line2: e.target.value,
                    },
                  })
                }
              />
              <InputField
                type="text"
                placeholder="Pincode"
                defaultVal={id ? data?.address.pincode : ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDataValues({
                    ...dataValues,
                    address: {
                      ...dataValues.address,
                      pincode: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div className="empid">
              <InputField
                type="text"
                placeholder="Employee ID"
                label="Employee ID"
                defaultVal={id ? data?.employeeID : ""}
                disabled={!!id}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDataValues({
                    ...dataValues,
                    employeeID: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="button-div">
            <Button
              type="button"
              Text="Save"
              className="Create"
              onClick={handleSubmit}
              // disabled={isLoading}
            />
            <Button type="button" Text="Cancel" className="cancel" />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
