import { useNavigate, useSearchParams } from "react-router-dom";
import Select from "../select/select";
import { FaPlus } from "react-icons/fa";

import "./list.css";

import TableData from "../table-data/table-data";

const List = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/employees");
  };
 const handleStatus=(status:string) => {
   if(status!=="Status"){
    searchParams.set("Status", status);
    setSearchParams(searchParams);}
    else{
      searchParams.delete("Status");
    setSearchParams(searchParams);
    }
  };

  return (
    <>
      <div className="head">
        <div className="left-head">Employee List</div>
        <div className="right-head">
          <Select
            options={["Status", "Active", "Inactive", "Probation"]}
            default_val="Status"
            label="Filter By"
            id="status"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleStatus(e.target.value)
            }
          ></Select>
          <div className="icon-button" onClick={handleClick}>
            <i>
              <FaPlus />
            </i>{" "}
            Create Employee
          </div>
        </div>
      </div>
     
      <table className="table">
        <tr>
          <th>Employee Name</th>
          <th>Employee ID</th>
          <th>Joining Date </th>
          <th>Role </th>
          <th>Status</th>
          <th>Experience</th>
          <th>Action</th>
        </tr>

        <TableData status={searchParams.get("Status")}></TableData>
      </table>
     
    </>
  );
};

export default List;
