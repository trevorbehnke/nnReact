import ReactDOM from "react-dom";
import "./Modal.css";

export default function Modal({
  children,
  toggleModal,
  btnText,
  isSalesModal,
}) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: "4px solid",
          borderColor: isSalesModal ? "#ff4500" : "#555",
          textAlign: "center",
        }}
      >
        {children}
        <button
          onClick={toggleModal}
          className={isSalesModal ? "sales-btn" : ""}
        >
          {btnText}
        </button>
      </div>
    </div>,
    document.body
  );
}
