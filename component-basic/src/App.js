import React from "react";
import "./App.css";

function App() {
  function sayHello(name) {
    return "hello " + name;
  }
  const myName = "omprakash";
  return (
    <div className="App">
      <h1>Hi {sayHello("om")}</h1>
    </div>
  );
}

export default App;
