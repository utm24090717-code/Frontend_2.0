import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login";
import Registro from "./components/Registro";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/Registro" element={<Registro />} />
    </Routes>
  );
}

export default App;

