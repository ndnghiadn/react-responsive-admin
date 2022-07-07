import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Chart from "./components/Chart";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/test" element={<Chart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
