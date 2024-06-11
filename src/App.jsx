import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Components/Todos";
import AddTodos from "./Components/AddTodos";


function App() {
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodos />
      <Todo />
    </>
  );
}

export default App;
