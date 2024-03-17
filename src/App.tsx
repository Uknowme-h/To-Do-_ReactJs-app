import { SetStateAction, useState } from "react";
import Dropdown from "./components/Dropdown";
import Inputs from "./components/inputs";
import "./App.css";
import inputs from "./components/inputs";

function App() {
  const [alertvisible, setalert] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [style, setstyle] = useState("list");
  return (
    <div id="card">
      <h1 id="heading">TO-DO LIST</h1>
      {alertvisible && <Dropdown onclose={() => setalert(false)}></Dropdown>}
      <Inputs
        onClick={() => {
          if (alertvisible == false) {
            setalert(true);
          } else {
            setalert(false);
          }
        }}
      ></Inputs>

      {/* <div id={style}>
        <ul>
          <li
            onClick={() => {
              if (style == "list") setstyle("completed");
              else {
                setstyle("list");
              }
            }}
          >
            {inputValue}
          </li>
        </ul>
      </div> */}
    </div>
  );
}
export default App;
