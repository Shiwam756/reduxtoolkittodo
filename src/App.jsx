import React from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import "./App.css";

const App = () => {
  return (
    <>
      <AddTodo />
      <Todo />
    </>
  );
};

export default App;
