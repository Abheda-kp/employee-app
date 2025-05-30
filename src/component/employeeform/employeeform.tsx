import InputField from "../inputfield/inputfield";
import "./employeeform.css"
const EmployeeForm = ({
  values,
  onChange,
}: {
  values: {
    employeeName: string;
    joiningDate: string;
    experience: string;
    roles: string;
    status: string;

   
      flatNo: string;
      line1: string;
      line2: string;
      pincode: string;
    
  };

  onChange: (field: string, value:string) => void;
}) => {
  return (
     <div className="form">
      <InputField
        id="emp-employeeNmae-input"
        label="Employee Name"
        placeholder="Enter employee name"
        value={values.employeeName}
        onChange={(e) => onChange("employeeName", e.target.value)}
      />
      <InputField
        id="emp-joiningDate-input"
        label="Joinig Date"
        placeholder="Enter Joining Date"
        type="date"
        value={values.joiningDate}
        onChange={(e) => onChange("joiningDate", e.target.value)}
      />
      <InputField
        id="Role"
        label="Role"
        placeholder="Enter Role"
        value={values.experience}
        onChange={(e) => onChange("Role", e.target.value)}
      />
      <InputField
        id="Status"
        label="Status"
        placeholder="Enter Status"
        value={values.experience}
        onChange={(e) => onChange("Status", e.target.value)}
      />
      <InputField
        id="Address"
        label="Address"
        placeholder="Flat No"
        value={values.flatNo}
        onChange={(e) => onChange("Flat No", e.target.value)}
      />
       <InputField
        id="Address"
        //label="Address"
        placeholder="line1"
        value={values.line1}
        onChange={(e) => onChange("line1", e.target.value)}
      />
       <InputField
        id="Address"
        //label="Address"
        placeholder="line2"
        value={values.line2}
        onChange={(e) => onChange("line2", e.target.value)}
      />
      <InputField
      placeholder="pincode"
      value={values.pincode}
      onChange={(e) => onChange("pincode", e.target.value)}
      />
      <InputField
        id="emp-experience"
        label="Experience(yrs)"
        type="number"
        placeholder="Enter Experience"
        value={values.experience}
        onChange={(e) => onChange("Experience", e.target.value)}
      />
    </div>
  );
};
export default EmployeeForm;
