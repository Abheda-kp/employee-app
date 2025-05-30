import "./dashoboard.css";
import EmployeeForm from "../employeeform/employeeform";
import { useState } from "react";

const Dashboard = () => {
   const [values, setValues] = useState({
    employeeName: "",
    joiningDate: "",
    Age: "",
    Email: "",
    experience: "",
    department: "",
    roles: "",
  password:"",
    status: "",
    address: "",
    flatNo: "",
  
      FlatNO: "",
      line1: "",
      line2: "",
      pincode: "",
    
  });

  return(

   <div className="body">
       <div className="subpart">
       <div className="flex-container">
         
   <EmployeeForm values={values}
   onChange={(field,value)=>{
    setValues({...values,[field]:value})
   }}/>
  
   </div>
   </div>
   </div>
   
   
    
    

  )

}

export default Dashboard
