import "./index.css";
interface props {
  onclose?: () => void;
}
function Dropdown({ onclose }: props) {
  return (
    <div id="drop">
      <ul>
        <button id="close" onClick={onclose}>
          X
        </button>
        <li>
          <a className="dropdown-item" href="#">
            All
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Completed
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Uncompleted
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
