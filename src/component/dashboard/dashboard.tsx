import "./dashoboard.css";
import moment from 'moment';
import Select from "../select/select";
import { useNavigate, useParams } from "react-router-dom";
import InputField from "../inputfield/inputfield";
import Button from "../button/button";

import EmployeeData from "../dataset/dataset";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.setItem("isLoggedIn", "false");
    navigate("/login");
  };
  const { id } = useParams();
  
  console.log("id",id)
  const values = EmployeeData();
  const data=values.find((item)=>{
      console.log(item.EmployeeID,id)
          if(`:${item.EmployeeID}`===(id)){
           
            return item
          }
  })
  return (
   
    <div className="body">
      <div className="subpart">
        <div className="flex-container">
          <div className="form">
            <InputField
              type="text"
              placeholder="Employee name"
              label="Employee Name"
              defaultVal={id?data?.EmployeeName:""}
            ></InputField>
          </div>
          <div className="form">
            <InputField
              type="Date"
              placeholder="Joining Date"
              label="Joining Date"
             defaultVal={id ? moment(data?.JoiningDate).format('YYYY-MM-DD') : ""}
            ></InputField>
          </div>
          <div className="form">
            <Select
              options={["HR", "UX", "UI", "Developer"]}
              // default_val={id?data?.Department:"Developer"}
              label="Department"
              
            ></Select>
          </div>
          <div className="form">
            <Select
              options={["UI/UX designer", "Developer", "Tester"]}
              default_val={id?data?.Role:"Choose Role"}
              label="Choose Role"
            ></Select>
          </div>
          <div className="form">
            <Select
              options={["Active", "Inactive", "Probation"]}
              default_val=" Status"
              label="Status"
            ></Select>
          </div>
          <div className="form">
            <Select
              options={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]}
              default_val={id?data?.Experience:"2"}
              label="Experience"
            ></Select>
          </div>
        </div>

        <div className="last-block">
          <div className="parent">
            <div className="address-block">
              <InputField
                type="text"
                placeholder="House No/Block"
                label="Address"
                defaultVal={id?data?.Address.HouseNo:""}
              ></InputField>
              <InputField type="text" placeholder="Address Line 1" defaultVal={id?data?.Address.Line1:""}></InputField>
              <InputField type="text" placeholder="Address Line 2" defaultVal={id?data?.Address.Line2:""}></InputField>
            </div>
            <div className="empid">
              <InputField
                type="text"
                placeholder="Employee ID"
                label="Employee ID"
                defaultVal={id?data?.EmployeeID:""}
                disabled={id ? true : false}
              ></InputField>
            </div>
           
          </div>

          <div className="button-div">
            <Button type="button" Text="Create" className="Create"></Button>
            <Button type="button" Text="Cancel" className="cancel"></Button>
            <Button
              type="button"
              Text="Logout"
              className="cancel"
              onClick={handleClick}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
