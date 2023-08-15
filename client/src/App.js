import React from "react";
import Header from "./components/Header";
import "./App.css";
import Todoform from "./components/Todoform";
import Todos from "./components/Todos";
const App = () => {
  return (
    <div>
      <Header />
      <Todoform />
      <Todos />
    </div>
  );
};

export default App;
