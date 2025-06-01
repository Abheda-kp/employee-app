import "./dashoboard.css";
import moment from "moment";
import Select from "../select/select";
import { useNavigate, useParams } from "react-router-dom";
import InputField from "../inputfield/inputfield";
import Button from "../button/button";
import EmployeeData from "../dataset/dataset";
import React, { useEffect, useState } from "react";
import store from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  EMPLOYEE_ACTION_TYPES,
  type Status,
} from "../../store/employee/employee.types";

let createData={employeeId: "",
    email: "",
    name: "",
    age: 0,
    password: "",
    role: "UI",
    dateOfJoining: "",
    experience: 2,
    status: "Active",
    department: "",
    address: {
      houseNo: "",
      line1: "",
      line2: "",
      pincode: "",
    }}
const Dashboard = () => {
  const employeeData = useSelector((state) => state.employees);
  const { id } = useParams();
const [dataValues, setDataValues] = useState(() => (id ? (employeeData.find((item) => item.employeeId === id)) : createData));

    
    
 

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    localStorage.setItem("isLoggedIn", "false");
    navigate("/login");
  };

  
  

  const data = employeeData.find(
    (item: any) => item.employeeId=== id
  );

  const handleSubmit = () => {
    if (!id) {
      const action = { type: EMPLOYEE_ACTION_TYPES.ADD, payload: dataValues };
      dispatch(action);
    } else {
       console.log("datavalues",dataValues)
       const action = { type: EMPLOYEE_ACTION_TYPES.UPDATE, payload: dataValues };
       console.log("Dispatching action with payload:", dataValues);
      dispatch(action);
    }
  };

  useEffect(() => {
    console.log(dataValues);
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
          <div className="form">
            <InputField
              type="password"
              placeholder="password"
              label="Password"
              defaultVal={id ? data?.password : ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDataValues({ ...dataValues, password: e.target.value })
              }
            />
          </div>
          <div className="form">
            <InputField
              type="Date"
              placeholder="Joining Date"
              label="Joining Date"
              defaultVal={id ? data?.dateOfJoining : ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDataValues({ ...dataValues, dateOfJoining: e.target.value })
              }
            />
          </div>
          <div className="form">
            <Select
              options={["HR", "UX", "UI", "Developer"]}
              default_val={id ? data?.departmentId : "Developer"}
              label="Department"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setDataValues({ ...dataValues, department: e.target.value })
              }
            />
          </div>
          <div className="form">
            <Select
              options={["UI/UX designer", "Developer", "Tester"]}
              default_val={id ? data?.role : "Choose Role"}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setDataValues({ ...dataValues, role: e.target.value })
              }
              label="Choose Role"
            />
          </div>
          <div className="form">
            <Select
              options={["Active", "Inactive", "Probation"]}
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
                defaultVal={id ? data?.employeeId : ""}
                disabled={!!id}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDataValues({
                    ...dataValues,
                    employeeId: e.target.value,
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
            />
            <Button type="button" Text="Cancel" className="cancel" />
            <Button
              type="button"
              Text="Logout"
              className="cancel"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
