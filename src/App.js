import React from "react";
import TimeSheet from "./components/TimeSheet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>How many hours do you need to work?</h1>
      <div class="ui mini focus input">
        <input type="number" placeholder="Hours..." />
      </div>
      <h1>When did you clock in?</h1>
      <div class="ui mini focus input">
        <input type="time" placeholder="Clock In..." />
      </div>
      <h1>When did you clock in?</h1>
      <div class="ui mini focus input">
        <input type="time" placeholder="Clock In..." />
      </div>
      <TimeSheet />
    </div>
  );
}

export default App;
