import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {

  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
