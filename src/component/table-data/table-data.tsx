import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import "./table-data.css";
import { useNavigate } from "react-router-dom";
// import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { useState } from "react";
import EmployeeData from "../dataset/dataset";
import PopupModal from "../popup/popup";
import EditEmployee from "../../pages/edit-employee/edit-employee";
import { useSelector } from "react-redux";

const TableData = ({ status }: { status: string | null }) => {
  const navigate = useNavigate();
  const handleEdit = (id: number) => {
  
   navigate(`/employees/${id}`);

  };
  const [showModal, setShowModal] = useState(false);
  // const [showPopup, setShowPopup] = useState(false);
const loadDetails=(id:number)=>{
  navigate(`/employees/details/${id}`)
}
// e.stopPropagation();
 // const employeeData = EmployeeData();
 const employeeData=useSelector(state=>state.employees)
 console.log(employeeData)
  return employeeData.map((data) => {
  
    if (data.status === status || !status ) {
        console.log("status hi:",status)
      return (
        
        <tr>
          <td onClick={()=>loadDetails(data.employeeId)}>{data.name}</td>
          <td>{data.employeeId}</td>
          <td>{data.dateOfJoining}</td>
          <td>{data.role}</td>
          <td>
            <div className={`status-colour  status-colour--${data.status}`}>
              {data.status}
            </div>
          </td>
          <td>{data.experience}</td>
          <td>
            <span className="icon_trash" onClick={() => setShowModal(true)}>
              <FaTrash />
            </span>
            <span
              className="icon_pencil"
              onClick={() => handleEdit(data.employeeId)}
            >
              <FaPencil />
            </span>
          </td>
          <PopupModal id={data.employeeId} show={showModal}   onClose={() => setShowModal(false)} />
        </tr>
      );
    }
  });
};

export default TableData;
