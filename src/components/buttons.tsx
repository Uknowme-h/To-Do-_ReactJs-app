import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
  onclose?: () => void;
  color?: string;
}

function Buttons({ children, onClick, color = "primary" }: Props) {
  return (
    <button
      type="button"
      className={`btn btn-${color}`}
      onClick={onClick}
      onDoubleClick={onClick}
    >
      {children}
    </button>
  );
}

export default Buttons;
