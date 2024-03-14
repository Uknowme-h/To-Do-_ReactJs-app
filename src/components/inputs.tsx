import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface props {
  onClick?: () => void;
  onInputChange?: (value: string) => void;
  onAddTask?: (value: String) => void;
}

function inputs({ onClick, onInputChange, onAddTask }: props) {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
    if (onInputChange) {
      onInputChange(event.target.value); // Call the prop function
    }
  };
  const handleAddTask = (onAddTask: ((value: String) => void) | undefined) => {
    // Handle adding the task to your todo list logic here (optional)
    console.log("Add Task:", inputText);
    setInputText(""); // Clear input field after adding task (optional)
    if (onAddTask) {
      onAddTask(inputText); // Call the prop function with input value
    }
  };
  return (
    <div id="inputs">
      <input
        type="text"
        placeholder="Enter your todo list"
        value={inputText}
        onChange={handleInputChange}
      ></input>
      <button
        type="button"
        id="icons"
        className="btn btn-secondary"
        onClick={() => handleAddTask(onAddTask)}
      >
        ADD TASKS &nbsp;
        <FontAwesomeIcon icon={faPlus} />
      </button>

      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="true"
        id="dropdown"
        onClick={onClick}
      >
        Filter
      </button>
    </div>
  );
}

export default inputs;
