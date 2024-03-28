import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Orginization from "./components/Orginization";
import Assets from "./components/Assets";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orginization" element={<Orginization />} />
            <Route path="/assets" element={<Assets />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
