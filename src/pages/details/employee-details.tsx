
import { FaPencil } from "react-icons/fa6";
import EmployeeDetails from "../../component/details/details";
import Title from "../../component/title/title";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const Details = () => {
  const navigate=useNavigate();
const { id }=useParams()

const handleEdit = (id: string) => {
  
   navigate(`/employees/${id}`);

  };
  
  return (
    <div className="background">
      {/* <div className="head"> */}
      <Title heading="Employee Details"
       
      endAdornment={
        <div className="right-head">
          <i onClick={()=>handleEdit(id)}><FaPencil/>Edit</i>
        </div>}
   
      />
   {/* </div> */}
      <EmployeeDetails />
    </div>
  );
};

export default Details;
