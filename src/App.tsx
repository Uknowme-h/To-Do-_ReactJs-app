import { SetStateAction, useState } from "react";
import Dropdown from "./components/Dropdown";
import Inputs from "./components/inputs";
import "./App.css";

function App() {
  const [alertvisible, setalert] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (value: SetStateAction<string>) => {
    setInputValue(value);
  };
  return (
    <div id="card">
      <h1 id="heading">TO-DO LIST</h1>
      {alertvisible && <Dropdown onclose={() => setalert(false)}></Dropdown>}
      <Inputs
        onClick={() => {
          setalert(true);
        }}
        onInputChange={handleInputChange}
      ></Inputs>

      <div id="list">
        <ul>
          <li>{inputValue}</li>
        </ul>
      </div>
    </div>
  );
}
export default App;
