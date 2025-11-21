import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login";
import Registro from "./components/Registro";
import Dashboard from "./components/Dashboard";
import Contraseña from "./components/Contraseña"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Contraseña" element={<Contraseña />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
