import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import "./table-data.css";
import { useNavigate } from "react-router-dom";
// import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { useState } from "react";
import EmployeeData from "../dataset/dataset";
import PopupModal from "../popup/popup";
import EditEmployee from "../../pages/edit-employee/edit-employee";

const TableData = ({ status }: { status: string | null }) => {
  const navigate = useNavigate();
  const handleEdit = (id: number) => {
    navigate(`/employees/:${id}`);
  };
  const [showModal, setShowModal] = useState(false);
  // const [showPopup, setShowPopup] = useState(false);
// e.stopPropagation();
  const employeeData = EmployeeData();
  return employeeData.map((data) => {
    if (data.Status === status || !status) {
      return (
        <tr>
          <td>{data.EmployeeName}</td>
          <td>{data.EmployeeID}</td>
          <td>{data.JoiningDate}</td>
          <td>{data.Role}</td>
          <td>
            <div className={`status-colour  status-colour--${data.Status}`}>
              {data.Status}
            </div>
          </td>
          <td>{data.Experience}</td>
          <td>
            <span className="icon_trash" onClick={() => setShowModal(true)}>
              <FaTrash />
            </span>
            <span
              className="icon_pencil"
              onClick={() => handleEdit(data.EmployeeID)}
            >
              <FaPencil />
            </span>
          </td>
          <PopupModal show={showModal} onClose={() => setShowModal(false)} />
        </tr>
      );
    }
  });
};

export default TableData;
