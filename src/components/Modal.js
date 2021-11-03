import ReactDOM from "react-dom";
import "./Modal.css";

export default function Modal({ children, toggleModal, btnText }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <button onClick={toggleModal}>{btnText}</button>
      </div>
    </div>,
    document.body
  );
}
