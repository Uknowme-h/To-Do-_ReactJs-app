import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

interface props {
  onClick?: () => void;
}

function inputs({ onClick }: props) {
  const [value, setvalue] = useState("");
  const [todo, settodo] = useState<string[]>([]);

  const handletask = () => {
    console.log(todo);
    if (value !== "") {
      settodo([...todo, value]);
      setvalue("");
    }
  };

  useEffect(() => {
    console.log(todo);
  }, [todo]);

  const [style, setstyle] = useState("list");
  return (
    <div>
      <div id="inputs">
        <input
          type="text"
          placeholder="Enter your todo list"
          value={value}
          onChange={(e) => {
            setvalue(e.target.value);
          }}
        ></input>
        <button
          type="button"
          id="icons"
          className="btn btn-secondary"
          onClick={() => handletask()}
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
      <div className="todo" id={style}>
        <div className="card-body">
          <ul>
            {todo.map((todos, index) => {
              return (
                <li
                  onClick={() => {
                    if (style == "list") setstyle("completed");
                    else {
                      setstyle("list");
                    }
                  }}
                  key={index}
                >
                  {todos}
                </li>
              );
            })}
          </ul>

          <a href="#" className="btn btn-primary">
            Mark as complete
          </a>
        </div>
      </div>
    </div>
  );
}

export default inputs;
