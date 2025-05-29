import "./popup.css"
const PopupModal = ({ show, onClose }: { show: boolean; onClose: () => void }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Are you sure?</h2>
        <div className="modal-content">
          Do you really want to delete this employee?
        </div>
        <button className="modal-confirm">Confirm</button>
        <button className="modal-close" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PopupModal;
