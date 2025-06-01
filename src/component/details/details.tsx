import { useSelector } from "react-redux";
import Content from "../content/content";
import "./details.css";
import { useParams } from "react-router-dom";
const EmployeeDetails = () => {
  const employeeData = useSelector((state) => state.employees);
  const { id } = useParams();
  
  const data = employeeData.find((item) => item.employeeId === id)
  
 
  return (
    <>
      <div className="outer-box">
        <div className="flex-content">
          <Content label="Employee Name" value={data?.name} />
          <Content label="Joining Date" value={data?.dateOfJoining} />
          <Content label="Experience" value={data?.experience} />
          <Content label="Role" value={data?.role} />
          <Content label="Status" value={data?.status} />
        </div>
        <div className="flex-content">
          <Content
            label="Address"
            value={
              data?.address.houseNo +
              " " +
              data?.address.line1 +
              " " +
              data?.address.line2 +
              " " +
              data?.address.pincode
            }
          />
          <Content label="Employee ID" value={data?.employeeId} />
        </div>
      </div>
    </>
  );
};

export default EmployeeDetails;

// const EmployeeDetails = {
//     password: "abhikp",
//     role: "HR",
//     email: "nancy@gmail.com",
//     age: 24,
//     name: "Nancy",
//     departmentId: 17,
//     address: {
//       line1: "Sans Villa",
//       pincode: "310391",
//       line2: "L.A",
//       houseNo: "B12",
//     },
//     status: "ACTIVE",
//     dateOfJoining: "2025-12-01",
//     experience: 1,
//     employeeID: "E103",
//   };
