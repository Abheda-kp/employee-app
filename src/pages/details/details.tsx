
import { FaPencil } from "react-icons/fa6";
import EmployeeDetails from "../../component/details/details";
import Title from "../../component/title/title";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate=useNavigate();
  const handleEdit=()=>{
          navigate(`/employees/`)
  }
  return (
    <div className="background">
      <div className="head">
      <Title heading="Employee Details"
       
      endAdornment={
        <div className="right-head">
          <i onClick={()=>handleEdit}><FaPencil/>Edit</i>
        </div>}
   
      />
   </div>
      <EmployeeDetails />
    </div>
  );
};

export default Details;
