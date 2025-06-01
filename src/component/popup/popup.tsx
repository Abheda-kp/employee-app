import { useDispatch } from "react-redux";
import "./popup.css"
import { EMPLOYEE_ACTION_TYPES } from "../../store/employee/employee.types";
const PopupModal = ({ show, onClose ,id}: { show: boolean; onClose: () => void;id:number}) => {
  if (!show) return null;
  const dispatch=useDispatch()
  const handleDelete=(id:number)=>{
     dispatch({type:EMPLOYEE_ACTION_TYPES.DELETE,payload:id})
     onClose()
     
  }
  
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Are you sure?</h2>
        <div className="modal-content">
          Do you really want to delete this employee?
        </div>
        <button className="modal-confirm" onClick={()=>handleDelete(id)}>Confirm</button>
        <button className="modal-close" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PopupModal;
