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
import { useAppSelector } from "../../store/store";
import { useDeleteEmployeeMutation, useGetEmployeeListQuery } from "../../api-service/employees/employees.api";

const TableData = ({ status }: { status: string | null }) => {
  const navigate = useNavigate();
  const { data: employeeData } = useGetEmployeeListQuery();
  const handleEdit = (id: number) => {
    navigate(`/employees/${id}`);
  };

  const [showModal, setShowModal] = useState(false);
  // const [showPopup, setShowPopup] = useState(false);
  const loadDetails = (id: number) => {
    navigate(`/employees/details/${id}`);
  };

  // e.stopPropagation();
  // const employeeData = EmployeeData();
  //  const employeeData=useAppSelector(state=>state.employee.employees)
  
  console.log(employeeData);
  
  return employeeData?.map((data) => {
    if (data.status === status || !status || status==="STATUS") {
      // console.log("status hi:", status);
      return (
        <tr>
          <td onClick={() => loadDetails(data.id)}>{data.name}</td>
          <td>{data.employeeID}</td>
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
              onClick={() => handleEdit(data.id)}
            >
              <FaPencil />
            </span>
          </td>
          <PopupModal
            id={data.id}
            show={showModal}
            onClose={() => setShowModal(false)}
          />
        </tr>
      );
    }
  });
};

export default TableData;
