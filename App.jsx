
import React from "react";
import "./App.css";
import Feature1 from "./f1";
import Feature2 from "./f2";
import Feature4 from "./f4";
import Feature3 from "./f3";

function App() {
  function DarkMode() {
    let theme= document.body;
    theme.classList.toggle("dark");
  }

  return (
    <div className="major">
      <div className="page">
        <div className="header">
          <h4>Lets Collaborate</h4>
        </div>
        <div className="features">
          <Feature1/>
          <Feature2/>
          <Feature3/>
          <Feature4/>
          <button className="dark-mode" onClick={DarkMode}>
            {" "}
            Toggle Night Mode{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
