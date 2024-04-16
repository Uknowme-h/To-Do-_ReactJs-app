import { SetStateAction, useState } from "react";
import Dropdown from "./components/Dropdown";
import Inputs from "./components/inputs";
import "./App.css";
import inputs from "./components/inputs";

function App() {
  const [alertvisible, setalert] = useState(false);
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
    </div>
  );
}
export default App;
