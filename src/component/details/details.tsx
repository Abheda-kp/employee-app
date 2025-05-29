import Content from "../content/content";
import "./details.css";
const EmployeeDetails = () => {
  const EmployeeDetails = {
    password: "abhikp",
    role: "HR",
    email: "nancy@gmail.com",
    age: 24,
    name: "Nancy",
    departmentId: 17,
    address: {
      line1: "Sans Villa",
      pincode: "310391",
      line2: "L.A",
      houseNo: "B12",
    },
    status: "ACTIVE",
    dateOfJoining: "2025-12-01",
    experience: 1,
    employeeID: "E103",
  };
  return (
    <>
      
      <div className="outer-box">
        <div className="flex-content">
          <Content label="Employee Name" value={EmployeeDetails.name} />
          <Content label="Joining Date" value={EmployeeDetails.dateOfJoining} />
          <Content label="Experience" value={EmployeeDetails.experience} />
          <Content label="Role" value={EmployeeDetails.role} />
          <Content label="Status" value={EmployeeDetails.status} />
        </div>
        <div className="flex-content">
          <Content
            label="Address"
            value={
              EmployeeDetails.address.houseNo +
              " " +
              EmployeeDetails.address.line1 +
              " " +
              EmployeeDetails.address.line2 +
              " " +
              EmployeeDetails.address.pincode
            }
          />
          <Content label="Employee ID" value={EmployeeDetails.employeeID}/>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetails;
