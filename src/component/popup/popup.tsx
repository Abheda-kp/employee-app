import { useDispatch } from "react-redux";
import "./popup.css";
import { useDeleteEmployeeMutation } from "../../api-service/employees/employees.api";
import { useState } from "react";
// import { EMPLOYEE_ACTION_TYPES } from "../../store/employee/employee.types";
const PopupModal = ({
  show,
  onClose,
  id,
}: {
  show: boolean;
  onClose: () => void;
  id: number;
}) => {
  if (!show) return null;
  const [deleteEmployee] = useDeleteEmployeeMutation();
  const [error, setError] = useState("");
  
  const handleDelete = async (id:number) => {

    deleteEmployee(id)
      .unwrap()
      .then(() => {
        onClose();
      })

      .catch((error) => {
        setError(error.data.message);
        console.log(error);
      });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Are you sure?</h2>
        <div className="modal-content">
          Do you really want to delete this employee?
        </div>
        <button className="modal-confirm" onClick={() => handleDelete(id)}>
          Confirm
        </button>
        <button className="modal-close" onClick={onClose}>
          Cancel
        </button>
        <p>{error}</p>
      </div>
    </div>
  );
};

export default PopupModal;
