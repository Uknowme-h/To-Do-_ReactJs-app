import { ReactNode } from "react";
import "./Alert.css";

interface Props {
  onClose: () => void;
}
const Alert = ({ onClose }: Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
      id="alert"
    >
      <strong>Alert!</strong> Please enter a task!.
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
