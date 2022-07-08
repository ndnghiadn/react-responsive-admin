import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";
import { useState } from "react";
import Login from "./components/Login/Login";

function App() {
  const [toggleDashBoard, setToggleDashBoard] = useState(true);
  const handleToggleDashboard = () => {
    setToggleDashBoard((preState) => !preState);
  };

  return (
    <div className="App">
      <Sidebar toggleDashBoard={handleToggleDashboard} />
      <div className="content">
        <Header />
       <Content />
      </div>
    </div>
  );
}

export default App;
